import { Validator } from '@cfworker/json-schema';
import { useState, useEffect } from "react"
import { Tabs, Tab, TabList, TabPanel } from "react-tabs"
import 'react-tabs/style/react-tabs.css';
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

  // Keep track of test cases
  // TYPE: Array of test objects
  const [testCases, setTestCases] = useState(props.test_cases)

  useEffect(() => {
    // If the default_code passed in from the prop does not match our default code
    // stored (i.e. the page has been updated) 
    if (props.default_code !== defaultCode) {
      // Update the default code, set input code to default, and clear output
      setInputCode(JSON.stringify(props.default_code, null, 2));
      setDefaultCode(props.default_code);
      setConsoleOutput("");
      setTestCases(props.test_cases);
    }
    
  });

  const resetCodeInput = () => {
    setInputCode(JSON.stringify(defaultCode, null, 2))
  }

  const textInputSchema = () => {
    // First parse the string into a json (ENSURE ERROR IS CAUGHT)
    try {
      const converted_schema = JSON.parse(inputCode);
      // Then register the schema (ENSURE ERROR IS CAUGHT)
      // NOTE: this will not fail for invalid schemas
      const validator = new Validator(converted_schema, '2019-09');

      // Finally check the schema against the test cases
      var output = "";
      var i = 1;
      console.log(props.test_cases);
      for (const test of props.test_cases) {
        const result = validator.validate(test.data);
        if (result.valid === test.is_valid) {
            output += `Test ${i}: Passed! `;
        } else {
            output += `Test ${i}: Failed `;
        }
        i++;
      }

      setConsoleOutput(output);

    }
    catch(e) {
      setConsoleOutput("This is not a well formed JSON Schema: " + e);
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
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            {[...Array(testCases.length).keys()].map((num) => <Tab>Test {num+1}</Tab>)}
          </TabList>

          <TabPanel>
            <h3>Rendered text from the input:</h3>
            <p>
              {consoleOutput}
            </p>
          </TabPanel>
          {testCases?.map((test) => 
              <TabPanel><h4>Expected Result: </h4><code>{test.is_valid.toString()}</code><h4>Test Case:</h4> <CodeEditor value={JSON.stringify(test.data, null, 2)} readOnly={true} language="js" padding={15} style={{ backgroundColor: "#f5f5f5", fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace', }} /> </TabPanel>)
          }
        </Tabs>
    </>
)
  
}
