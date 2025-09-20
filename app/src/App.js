import './App.css';
import Greeting from './Greeting';
import Message from './Message';
import Button from './Button';

function App() {
  function handleClick() {
    console.log("Кнопку натиснуто!")
  }
  return (
    <div className="App">
     <Greeting name="Artem"/>
     <Message text="Hello:) I love coding"/>
     <Button onClick={handleClick} />
    </div>
  );
}

export default App;
