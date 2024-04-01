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

  // Keep track of if landing page has been shown
  const [showLandingPage, setShowLandingPage] = useState(true)

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

  // Remove landing page
  function removeLandingPage() {
    setShowLandingPage(false)
  }

  if (showLandingPage){
    // Return landing page if not loaded
    return(
    <>
      <h1>Landing page goes here</h1>
      <button onClick={removeLandingPage}>Get started</button>
    </>
    )

  } else {
    // Else return actual content
    return (
    <>
    <div>
      <NavBar />
    </div>
    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div className="col-md">
        <TutorialText
              page_source={pages[pageNum].page_source}
              title={pages[pageNum].title}
              prevPage={prevPage}
              nextPage={nextPage}
              prevPageExists={pageNum>0}
              nextPageExists={pageNum+1<pages.length}
            />
      </div>
      <div className="col-md">
        <InteractiveEditor
              default_code={pages[pageNum].default_code}
              test_cases={pages[pageNum].test_cases}
            />
      </div>
    </div>
    </>
    )}
}
