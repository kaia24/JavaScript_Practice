import './App.css';
import TestComp from './components/TestComp';

function App() {
  return (
    <div className="App">
      <h1>Happy Birthday!</h1>
     <TestComp name="Jane Doe" hair="black"/>
     <TestComp name="john Doe" hair="brown"/>
    </div>
  );
}

export default App;
