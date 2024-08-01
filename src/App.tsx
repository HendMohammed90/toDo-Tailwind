import './App.css'
import Counter from './Counter';
import TodoList from './TodoList';
import { trans, setCurrentLocaleCode } from "@mongez/localization";
import './config/localization'
import { useEffect, useState } from 'react';

function App() {

  type Language = {
    code: string;
    language: string;
    direction: 'ltr' | 'rtl';
  };

  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  const languages = [
    { code: "en", language: "English", direction: 'ltr' as string },
    { code: "ar", language: "عربي", direction: 'rtl' as string},
  ];

  const changeLanguage = ({ code, direction }: Language) => {
    setCurrentLocaleCode(code);
    setDirection(direction); 
    localStorage.setItem('locale', code);
    document.documentElement.setAttribute('dir', direction); 
  };


  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') || 'en';
    const selectedLanguage = languages.find(lang => lang.code === savedLocale) || languages[0];
    changeLanguage(selectedLanguage as Language);
  }, []);

  return (
    <div className="container mx-auto mt-5" style={{ direction }}>
      <div className='flex flex-row justify-between'>
      {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang as Language)}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2"
          >
            {lang.language}
          </button>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-3">{trans('headerTitle')}<Counter/></h1>
      <TodoList />
    </div>
  );
}

export default App
