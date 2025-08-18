
export type Language = 'ge' | 'en';

export interface LocalizedContent {
  name: string;
  title: string;
  description: string;
  bio: string;
  era: string;
  videoUrls: string[];
  locations?: Location[];
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

export interface Location {
  name: string;
  description: string;
  lat: number;
  lng: number;
}