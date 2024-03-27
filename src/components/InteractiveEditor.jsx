import { useState, useEffect } from "react"
import { registerSchema, validate } from "@hyperjump/json-schema/draft-2020-12";
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

  const textInputSchema = async () => {
    // First parse the string into a json (ENSURE ERROR IS CAUGHT)
    // Then register the schema (ENSURE ERROR IS CAUGHT)
    // Finally check the schema against the test cases
    registerSchema({
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "string"
    }, "http://example.com/schemas/string");

    const output = await validate("http://example.com/schemas/string", "foo");
    if (output.valid) {
      setConsoleOutput(inputCode)
      // setConsoleOutput("The instance is valid :)")
    } else {
      setConsoleOutput(inputCode)
      // setConsoleOutput("The instance is not valid :(")
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
