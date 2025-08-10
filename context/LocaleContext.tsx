
import React, { createContext, useState, useCallback, ReactNode } from 'react';
import type { Language } from '../types';

interface LocaleContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
    appTitle: { ge: 'საუკუნეთა ექო', en: 'Echo of Ages' },
    slogan: { ge: 'ციფრული ხმა წარსულიდან', en: 'A Digital Voice From The Past' },
    enterLibrary: { ge: 'ბიბლიოთეკაში შესვლა', en: 'Enter the Library' },
    searchPlaceholder: { ge: 'ძიება სახელით, სათაურით...', en: 'Search by name, title...' },
    filterByEpoch: { ge: 'ეპოქის ფილტრი', en: 'Filter by Epoch' },
    allEras: { ge: 'ყველა ეპოქა', en: 'All Eras' },
    centuryLabel: { ge: 'საუკუნე', en: 'Century' },
    bioTitle: { ge: 'ბიოგრაფია', en: 'Biography' },
    watchVideo: { ge: 'ვიდეოს ყურება', en: 'Watch Video' },
    chatWith: { ge: 'ესაუბრე', en: 'Chat with' },
    chatPlaceholder: { ge: 'დაწერეთ თქვენი შეკითხვა...', en: 'Type your question...' },
    backToLibrary: { ge: 'ბიბლიოთეკაში დაბრუნება', en: 'Back to Library' },
    backToHome: { ge: 'მთავარ გვერდზე დაბრუნება', en: 'Back to Home' },
    errorMessage: { ge: 'მოხდა შეცდომა. გთხოვთ სცადოთ თავიდან.', en: 'An error occurred. Please try again.' },
    viewChat: { ge: 'ჩატი', en: 'Chat' },
    viewVideo: { ge: 'ვიდეო', en: 'Video' },
    previousPage: { ge: 'წინა', en: 'Previous' },
    nextPage: { ge: 'შემდეგი', en: 'Next' },
    page: { ge: 'გვერდი', en: 'Page' },
    of: { ge: 'დან', en: 'of' },
};

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ge');

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] || key;
  }, [language]);

  return (
    <LocaleContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocaleContext.Provider>
  );
};