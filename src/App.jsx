import { useState } from "react"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import TutorialText from './components/TutorialText.jsx'
import NavBar from './components/NavBar.jsx'
import InteractiveEditor from './components/InteractiveEditor.jsx'
// Import page content
import pages from './page-data/pages.json'

export default function App() {
  // Keep track of current page in the tutorial
  const [pageNum, setPageNum] = useState(0)

  // Take relevant page from json
  const [pageJson, setPageJson] = useState(pages[pageNum])

	return (
  <>
  <div>
    <NavBar/>
  </div>
	<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="col-6">
      <TutorialText text={pageJson.paragraphs}/>
    </div>
    <div className="col-6">
      <InteractiveEditor default_code={pageJson.default_code}/>
    </div>
	</div>
  </>
	)
}
