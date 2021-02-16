import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import Counter from './components/Counter'
import CounterArrow from './components/CounterArrow'
import CounterHook from './components/CounterHook'
import MainLayout from './containers/MainLayout'
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './containers/AppLayout'


function App() {
  return (
    <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
  );
}

export default App;
