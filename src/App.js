import './App.css';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';
import Meals from './Component/Meals/Meals';

function App() {
  return (
    <div className = 'body'>
      <Header></Header>
      <Banner></Banner>
      <Meals></Meals>
    </div>
  );
}

export default App;
