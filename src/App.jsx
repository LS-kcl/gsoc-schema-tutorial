import { useState } from "react"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  const [inputText, setInputText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }

	return (
  <>
  <div>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <a class="navbar-brand" href="#">JSON Schema</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Specification</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Documentation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tooling</a>
      </li>
    </ul>
  </div>
</nav>
</div>
	<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="col-6">
      <h1>Tutorial Half</h1>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula luctus elit. Integer tempor neque eu eleifend aliquet. Etiam interdum turpis ante, at dignissim enim bibendum vel. Donec vitae nisl sapien. Quisque sed auctor risus. Nulla pretium, nunc feugiat suscipit tristique, nisi ex pulvinar ante, eu elementum est felis id ex. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam quis sodales nisi. Suspendisse potenti.
      </p>

      <p>
Maecenas porta finibus felis, ut fringilla odio. Donec dignissim dolor ut tincidunt porttitor. Proin scelerisque, tellus id placerat ornare, justo nisi eleifend ante, eu convallis dolor ante quis est. Ut sit amet ipsum eu urna tincidunt consequat. Vestibulum viverra semper mollis. Mauris suscipit quam id pretium hendrerit. Nunc egestas lectus eget arcu eleifend dictum. Pellentesque commodo elit accumsan felis elementum finibus. Suspendisse mauris sem, luctus vel arcu quis, facilisis faucibus tortor. Praesent eget eros felis. Suspendisse convallis sapien tellus, convallis ullamcorper odio posuere a. Suspendisse elit ex, suscipit ut feugiat a, sodales ut justo. Nullam in sem eget mi imperdiet ultrices. Phasellus dapibus ut felis mollis porttitor.
      </p>

      <p>
Mauris sodales luctus elit, nec fringilla elit consectetur nec. In maximus massa id erat aliquam lobortis. Suspendisse vulputate rhoncus metus, sit amet imperdiet dui dictum vel. Suspendisse potenti. Etiam consectetur tristique purus, eu viverra ligula posuere quis. Nunc id commodo diam. Ut porttitor tellus lectus, lobortis dapibus mauris tristique et. Nunc tempor vehicula diam elementum mollis. Maecenas ornare pretium diam, nec volutpat justo. Pellentesque eleifend nibh a erat volutpat, ac semper dolor rutrum. Mauris augue arcu, facilisis id maximus ac, gravida nec lacus. Ut lacinia massa enim, eu consectetur ante venenatis quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in massa ex. Quisque feugiat blandit ligula. Sed ornare nunc dui, id maximus diam ultricies non.
      </p>
    </div>
    <div className="col-6">
      <h1>Input Half</h1>
      <input className="form-control input-lg fill-area" value={inputText} onChange={e => setInputText(e.target.value)} type="text" id="item"/>
      <h1>Bottom Pane</h1>
      <h3>Rendered text from the input:</h3>
      <p>{inputText}</p>
    </div>
	</div>
  </>
	)
}
