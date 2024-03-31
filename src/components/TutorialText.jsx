import parse from 'html-react-parser';

export default function TutorialText(props) {
return(
    <>
      <div style={{"padding":"5px"}}>
        <h1>{props.title?props.title:"Title missing"}</h1>
        {parse(props.page_source)}
        <div className="page-controls">
          <button
            className="btn btn-secondary"
            onClick={props.prevPage}
            style={{height: '40px',}}>Previous Page
          </button>
          <button
            className="btn btn-secondary"
            onClick={props.nextPage}
            style={{height: '40px',}}>Next Page
          </button>
        </div>
      </div>
    </>
)
}
