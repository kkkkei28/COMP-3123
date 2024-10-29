import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';
import SayHello from './components/SayHello';

function App() {
  return (<div className='App'>
    <img src={logo} alt='App Logo' />
    <h1>Hello</h1>

    <h1>Test</h1>
    <Welcome></Welcome>
    <Greetings name="GBC" />
    <SayHello fname="Kei" lname="Ishikawa"/>
    <SayHello fname="Ishikawa" lname="mox"/>
    <SayHello fname="Test"  lname="Name"/>
    </div>)
  
}

export default App;
