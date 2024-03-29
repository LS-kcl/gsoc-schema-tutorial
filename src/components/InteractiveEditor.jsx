import { Validator } from '@cfworker/json-schema';
import { useState, useEffect } from "react"
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function InteractiveEditor(props) {
  // Keep track of default_code as well
  // TYPE: JSON Object
  const [defaultCode, setDefaultCode] = useState(props.default_code)

  // Keep track of code in editor
  // TYPE: String
  const [inputCode, setInputCode] = useState(JSON.stringify(defaultCode, null, 2))

  // Keep track of execution output
  // TYPE: String
  const [consoleOutput, setConsoleOutput] = useState("")

  useEffect(() => {
    // If the default_code passed in from the prop does not match our default code
    // stored (i.e. the page has been updated) 
    if (props.default_code !== defaultCode) {
      // Update the default code, set input code to default, and clear output
      setInputCode(JSON.stringify(props.default_code, null, 2));
      setDefaultCode(props.default_code);
      setConsoleOutput("");
    }
    
  });

  const resetCodeInput = () => {
    setInputCode(JSON.stringify(defaultCode, null, 2))
  }

  const textInputSchema = () => {
    // First parse the string into a json (ENSURE ERROR IS CAUGHT)
    try {
      const converted_schema = JSON.parse(inputCode)
      // Then register the schema (ENSURE ERROR IS CAUGHT)
      // NOTE: this will not fail for invalid schemas
      const validator = new Validator(converted_schema, '2019-09');

      // Finally check the schema against the test cases
      const result = validator.validate("Hello world");

      if (result.valid) {
        setConsoleOutput("Valid!")
      } else {
        setConsoleOutput("Invalid")
      }
    } catch (e) {
      setConsoleOutput("This is not a well formed JSON Schema: " + e)
    }

  }

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
      <div className="toolbar col-md-12">
          <button
            onClick={() => resetCodeInput()}
            className="btn btn-light"
            style={{height: '40px',}}>
            Reset
          </button>
          <button
            onClick={() => textInputSchema()}
            className="btn btn-primary"
            style={{height: '40px',}}>
            Check Answer
          </button>
      </div>
      <h1>Bottom Pane</h1>
      <h3>Rendered text from the input:</h3>
      <p>
        {consoleOutput}
      </p>
    </>
)
  
}
