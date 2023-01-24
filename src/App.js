import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Search from './components/Search';
import { useTheme } from './contexts/themeContext';

function App() {
  
  const { theme, changeTheme } = useTheme();
  
  return (
    <div className={`container ${theme}`}>
      
      <div className='content'>

        <Header/>

        <Search />

        <Card />

      </div>

    </div>
  );
}

export default App;
