
export type Language = 'ge' | 'en';

export interface LocalizedContent {
  name: string;
  title: string;
  description: string;
  bio: string;
  era: string;
  videoUrls: string[];
}

export interface HistoricalFigure {
  id: string;
  century: number[];
  image: string;
  ge: LocalizedContent;
  en: LocalizedContent;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}