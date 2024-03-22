import { useState } from "react"
import "./styles.css"


export default function App() {
  const [inputText, setInputText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }

	return (
	<div className="page">
    <div className="tutorial-half">
      <h1>Tutorial Half</h1>
      <h3>Rendered text from the input:</h3>
      <p>{inputText}</p>
    </div>
    <div className="input-half">
    <h1>Input Half</h1>
    <form className="new-item-form">
      <div className="form-row">
        <input value={inputText} onChange={e => setInputText(e.target.value)} type="text" id="item"/>
      </div>
    </form>
    </div>
	</div>
	)
}
