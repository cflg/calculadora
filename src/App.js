import './App.css';
import Button from './components/button.jsx'
import Display from './components/display'
import Clear from './components/clearButton.jsx'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

	const [input, setInput] = useState('')

	const pushInput = value => {
		setInput(input + value)
	}

	const result = () => {
		if(input){
		setInput(evaluate(input))
		}else{
			alert('Ingresa un numero, o queres que haga magia?')
		}
	}

  return (
    <div className="App">
      <div className="logo-container">
        <p className="cristian">cristian.</p>
        <p className="log">
          log(<p className="hola">'Hola!'</p>)
        </p>
      </div>
      <div className="calculator-container">
        <Display input={input} />
        <div className="fila">
          <Button shift={pushInput}>1</Button>
          <Button shift={pushInput}>2</Button>
          <Button shift={pushInput}>3</Button>
          <Button shift={pushInput}>+</Button>
        </div>
        <div className="fila">
          <Button shift={pushInput}>4</Button>
          <Button shift={pushInput}>5</Button>
          <Button shift={pushInput}>6</Button>
          <Button shift={pushInput}>-</Button>
        </div>
        <div className="fila">
          <Button shift={pushInput}>7</Button>
          <Button shift={pushInput}>8</Button>
          <Button shift={pushInput}>9</Button>
          <Button shift={pushInput}>*</Button>
        </div>
        <div className="fila">
          <Button shift={pushInput}>0</Button>
          <Button shift={pushInput}>.</Button>
          <Button shift={result}>=</Button>
          <Button shift={pushInput}>/</Button>
        </div>
        <div className="fila">
          <Clear clearHandler={() => setInput('')}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
