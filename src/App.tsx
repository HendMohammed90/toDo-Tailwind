import './App.css'
import Counter from './Counter';
import TodoList from './TodoList';
import './translations/i18n';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();
  const {i18n} = useTranslation();

  const language = [
    {code:"en", language: "English"},
    {code:"ar", language: "عربي"},
  ]

  document.body.dir = i18n.dir();

  return (
    <div className="container mx-auto mt-5">
      <div className='flex flex-row justify-between'>
      {language.map((lang) =>{
        return(<button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center end-2.5 my-2" onClick={()=> i18n.changeLanguage(lang?.code)} key={lang.code}>{lang?.language}</button>)
      } )}
      </div>
      <h1 className="text-3xl font-bold mb-3">{t("headerTitle")}<Counter/></h1>
      <TodoList />
    </div>
  );
}

export default App
