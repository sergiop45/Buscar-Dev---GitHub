import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className='container dark'>
      
      <div className='content'>

        <Header/>

        <Search />

        <Card />

      </div>

    </div>
  );
}

export default App;
