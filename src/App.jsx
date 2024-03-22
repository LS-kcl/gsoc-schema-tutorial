import { useState } from "react"
// import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  const [inputText, setInputText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }

	return (
	<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="col-6">
      <h1>Tutorial Half</h1>
      <h3>Rendered text from the input:</h3>
      <p>{inputText}</p>
    </div>
    <div className="col-6">
    <h1>Input Half</h1>
    <form className="new-item-form">
      <div className="form-row">
        <input className="form-control input-lg fill-area" value={inputText} onChange={e => setInputText(e.target.value)} type="text" id="item"/>
      </div>
    </form>
    </div>
	</div>
	)
}
