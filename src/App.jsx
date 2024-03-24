import { useState } from "react"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import TutorialText from './components/TutorialText.jsx'
import NavBar from './components/NavBar.jsx'
import InteractiveEditor from './components/InteractiveEditor.jsx'
// Import page content
import page_1 from './page-data/page_1.json'


export default function App() {
  // Store page in state object (start at page 1)
  const [pageJson, setPageJson] = useState(page_1)

  // We start by taking page content from json
  const [textObjects, setTextObjects] = useState(pageJson.text_objects)


  // Function to swap between pages
  function onChangePage(e){
    // Get the "next_page" or "prev_page" as needed
    // Fetch the needed page json from page-data (ideally already imported)
    // Take relevant fields out from the page json
    // Pass those fields into each setter object
    // setTextObjects()
  }
  

	return (
  <>
  <div>
    <NavBar/>
  </div>
	<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="col-6">
      <TutorialText text={page_1.text_objects}/>
    </div>
    <div className="col-6">
      <InteractiveEditor default_code={page_1.default_code}/>
    </div>
	</div>
  </>
	)
}
