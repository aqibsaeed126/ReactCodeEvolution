import './App.css';
import ParentComponent from './components/ParentComponent'
import EventBind from './components/EventBind'
import ClassClick from './components/ClassClick'
import FunctionalClick from './components/FunctionalClick'
import Counter from './components/Counter'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/*
      <EventBind />
      <ClassClick />
      <FunctionalClick />
      <Counter />
      <Greet name='Aqib' heroName='Babar Azam'/>
      <Welcome />
      <Welcome name='Aqib' heroName='SpiderMans'><p>This is Welcome Paragraph 1</p></Welcome>
      <Welcome name='Rauf' heroName='Batman'><button>Welcome Batman</button></Welcome>
      <Welcome name='Saeed' heroName='SuperMan'><p>This is Welcome Paragraph 3</p></Welcome>

      <Hello name='Aqib' heroName='SpiderMan'><p>This is Paragraph 1</p></Hello>
      <Hello name='Rauf' heroName='Batman'><button>Batman</button></Hello>
      <Hello name='Saeed' heroName='SuperMan'><p>This is Paragraph 3</p></Hello>

      <Message />
  */}
    </div>
  );
}

export default App;
