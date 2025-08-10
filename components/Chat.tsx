
import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/geminiService';
import type { HistoricalFigure, ChatMessage } from '../types';
import { useLocale } from '../hooks/useLocale';
import ChatBubbleIcon from './icons/ChatBubbleIcon';
import SpinnerIcon from './icons/SpinnerIcon';

interface ChatProps {
  figure: HistoricalFigure;
}

const Chat: React.FC<ChatProps> = ({ figure }) => {
  const { language, t } = useLocale();
  const content = figure[language];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const fontClass = language === 'ge' ? 'font-serif-ge' : 'font-serif-en';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const newUserMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await generateChatResponse(figure, language, [...messages, newUserMessage], input);
      setMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    } catch (err) {
      setError(t('errorMessage'));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={`h-full flex flex-col bg-black/20 rounded-lg p-4 ${fontClass}`}>
              <div className="flex items-center gap-2 mb-4 pb-2">
        <div className="text-brand-gold">
            <ChatBubbleIcon />
        </div>
        <h3 className="text-xl font-bold text-white">{t('chatWith')} {content.name}</h3>
      </div>
      <div className="flex-grow overflow-y-auto pr-2 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-brand-chocolate text-white' : 'bg-gray-700 text-gray-200'}`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                 <div className="bg-gray-700 text-gray-200 rounded-lg px-4 py-2 flex items-center gap-2">
                    <SpinnerIcon />
                    <span>...</span>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {error && <p className="text-red-400 text-sm my-2">{error}</p>}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('chatPlaceholder')}
                      className="flex-grow bg-gray-800 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all text-white"
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || input.trim() === ''}
          className="bg-brand-gold text-black font-bold px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chat;