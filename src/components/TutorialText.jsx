export default function TutorialText(props) {
return(
    <>
      <h1>Tutorial Half</h1>
      {props.text.map(para => {
        return (<p>{para}</p>)
      })}
    </>
)
}
