import { useState } from "react"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import TutorialText from './components/TutorialText.jsx'
import NavBar from './components/NavBar.jsx'
import InteractiveEditor from './components/InteractiveEditor.jsx'


export default function App() {
	return (
  <>
  <div>
    <NavBar/>
  </div>
	<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="col-6">
      <TutorialText/>
    </div>
    <div className="col-6">
      <InteractiveEditor/>
    </div>
	</div>
  </>
	)
}
