import { useState } from "react"
// import "./styles.css"
// import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss'
import TutorialText from './components/TutorialText.jsx'
import NavBar from './components/NavBar.jsx'
import InteractiveEditor from './components/InteractiveEditor.jsx'
// Import page content
import pages from './page-data/pages.json'

export default function App() {
  // Keep track of current page in the tutorial
  const [pageNum, setPageNum] = useState(0)

  // Next page
  function nextPage() {
    // Only increase page number if in bounds:
    if (pageNum+1 < pages.length){
      setPageNum(pageNum+1)
    }
  }

  // Previous page
  function prevPage() {
    // Only decrease page number if in bounds:
    if (pageNum-1 >= 0){
      setPageNum(pageNum-1)
    }
  }

	return (
  <>
  <div>
    <NavBar />
  </div>
	<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="col-6">
      <TutorialText
            page_source={pages[pageNum].page_source}
            title={pages[pageNum].title}
            prevPage={prevPage}
            nextPage={nextPage}
          />
    </div>
    <div className="col-6">
      <InteractiveEditor
            default_code={pages[pageNum].default_code}
            test_cases={pages[pageNum].test_cases}
          />
    </div>
	</div>
  </>
	)
}
