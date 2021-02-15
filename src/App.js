import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import Counter from './components/Counter'
import CounterArrow from './components/CounterArrow'
import CounterHook from './components/CounterHook'

function App() {
  return (
    <div className="flex-page">
      <div className="hook"><CounterHook/></div>
      <div className="arrow"><CounterArrow/></div>
      
    </div>
  );
}

export default App;
