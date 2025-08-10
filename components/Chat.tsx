
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
    <div className={`h-full flex flex-col bg-brand-aged-paper/60 rounded-lg p-4 border border-brand-aged-gold/40 ${fontClass} relative overflow-hidden`}>
      {/* Ornamental border */}
      <div className="absolute inset-0 ornamental-border opacity-10 pointer-events-none"></div>
      
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-brand-aged-gold/30 relative z-10">
        <div className="text-brand-aged-gold">
            <ChatBubbleIcon />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{t('chatWith')} {content.name}</h3>
      </div>
      
      <div className="flex-grow overflow-y-auto pr-2 space-y-4 relative z-10">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg border ${
              msg.sender === 'user' 
                ? 'bg-brand-aged-gold/20 text-gray-800 border-brand-aged-gold/40' 
                : 'bg-brand-aged-paper/80 text-gray-700 border-brand-aged-gold/30'
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                 <div className="bg-brand-aged-paper/80 text-gray-700 rounded-lg px-4 py-2 flex items-center gap-2 border border-brand-aged-gold/30">
                    <SpinnerIcon />
                    <span>...</span>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {error && <p className="text-red-600 text-sm my-2 relative z-10">{error}</p>}
      
      <div className="mt-4 flex gap-2 relative z-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('chatPlaceholder')}
          className="flex-grow bg-brand-aged-paper/80 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-aged-gold transition-all text-gray-800 border border-brand-aged-gold/30 placeholder-gray-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || input.trim() === ''}
          className="bg-brand-aged-gold text-gray-800 font-bold px-6 py-2 rounded-md hover:bg-brand-gold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed border border-brand-aged-gold/50"
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chat;