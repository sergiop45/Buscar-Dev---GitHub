import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Search from './components/Search';
import { useTheme } from './contexts/themeContext';
import { useUser } from './contexts/userContext';

function App() {
  
  const { theme } = useTheme();
  const { status } = useUser();
  
  return (
    <div className={`container ${theme}`}>
      
      <div className='content'>

        <Header/>

        <Search />
        
        { status.length > 0 ? 
          ( <h2 className='status'>{status}</h2>) :
          ( <Card /> ) 
          }

        

      </div>

    </div>
  );
}

export default App;
