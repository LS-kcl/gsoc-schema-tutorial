import { useState } from "react"
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function InteractiveEditor(props) {
  const [inputCode, setInputCode] = useState(props.default_code)

return(
    <>
      <h1>Input Half</h1>
      <CodeEditor
          value={inputCode}
          language="js"
          placeholder="Please enter a schema here"
          onChange={(e) => setInputCode(e.target.value)}
          padding={15}
          style={{
          backgroundColor: "#f5f5f5",
          height: '30em',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
/>
      <div className="toolbar">
        <button className="btn btn-light" style={{height: '40px',}}>Reset</button>
        <button className="btn btn-primary" style={{height: '40px',}}>Check Answer</button>
      </div>
      <h1>Bottom Pane</h1>
      <h3>Rendered text from the input:</h3>
      <p>{inputCode}</p>
    </>
)
  
}
