import logo from './logo.svg';
import Counter from './components/Counter'
import CounterArrow from './components/CounterArrow'
import CounterHook from './components/CounterHook'
import MainLayout from './containers/MainLayout'
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './containers/AppLayout'
//import StudentProvider from './context/StudentProvider'


function App() {
  return (
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
  
  );
}

export default App;
