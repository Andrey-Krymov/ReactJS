import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://gb.ru/lessons/155798/homework"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lesson 1 homework
        </a>
        <Message title={props.name} />
      </header>
    </div>
  );
}

function Message(props) {
  return <span className="msgStyle">{props.title}</span>;
};

export default App;
