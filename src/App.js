import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value;
  }, [value])
  return ref.current
}

function MessagesList() {
  const messages = [
    'text',
    'autor',
  ]
  return messages.map((message, index) => <div key={index}>{message}</div>)
}

function InputForm() {
  const [message, setMessage] = React.useState('')

  const latestMessage = useRef('')
  useEffect(() => {
    latestMessage.current = message
  })

  const showMessage = () => {
    alert('You text: ' + latestMessage.current)
  }

  const handleSendClick = () => {
    setTimeout(showMessage, 1500)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className="input">
      <input value={message} onChange={handleMessageChange} />
      <button className="btnShow" onClick={handleSendClick}>Send</button>
    </div>
  )
}

function App(props) {
  const [showChild, setShowChild] = React.useState(false)

  // const numbers = ['1', '2', '3', '4', '5']

  const handelTogleShowChild = () => {
    setShowChild(!showChild)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://gb.ru/lessons/155799/homework"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lesson 2 homework
        </a>
        <Message title={props.name} />
        <button className="btnShow" onClick={handelTogleShowChild}>show Component Class</button>
        {showChild ? <ComponentClass /> : null}
        {/* {showChild && <ComponentClass />} */}

        <MessagesList />
        <InputForm />

        {/* <React.Fragment>
          {numbers.map((number, index) => <div key={index}>{number}</div>)}
        </React.Fragment> */}
      </header>
    </div>
  );
}

function Message(props) {
  const [count, setCount] = React.useState(0);

  const ref = React.useRef(null)
  const prevCount = usePrevious(count)

  React.useEffect(() => {
    console.log('componentDidMount hook');
    return () => {
      console.log('componentWillUnmount hook');
    }
  }, [])

  React.useEffect(() => {
    console.log('hook did update', { prevCount, count });
  }, [prevCount, count])

  // const handleClick = () => setCount(currentCount => currentCount + 1)
  const handleClick = React.useCallback(() => {
    setCount(count + 1)
  }, [count])

  console.log('render', { ref });

  return <div>
    <span className="msgStyle" ref={ref}>{props.title}</span>

    <p>Count: {count}</p>
    <button className="btn" onClick={handleClick}>Increase</button>
  </div>
};

class ComponentClass extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = { count: 0 }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', { prevProps, prevState })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState(currentState => {
      return { count: currentState.count + 1 }
    })
  }

  render() {
    console.log('render');
    return <div>
      <p>Count: {this.state.count}</p>
      <button className="btn" onClick={this.handleClick}>Increase Component Class</button>
    </div>
  }
}

export default App;
