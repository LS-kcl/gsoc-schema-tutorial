export default function TutorialText(props) {
return(
    <>
      <h1>Tutorial Half</h1>
      {props.text.map(para => {
        return (<p>{para}</p>)
      })}
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
    </>
)
}
