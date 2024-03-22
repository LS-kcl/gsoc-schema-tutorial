import "./styles.css"

export default function App() {
	return (
	<>
	<div className="tutorial-half">
		<h1>Tutorial Half</h1>
		<p>Some text here</p>
	</div>
	<div className="input-half">
	<h1>Input Half</h1>
	<form className="new-item-form">
		<div className="form-row">
			<input type="text" id="item"/>

		</div>
	</form>
	</div>
	</>
	)
}
