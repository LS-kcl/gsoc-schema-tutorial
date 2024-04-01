export default function NavBar() {
  
return(
<>
  <nav class="navbar navbar-expand-md navbar-dark" style={{'padding':'10px', 'box-shadow': '0px 3px 7px black'}}>
    <a class="navbar-brand" href="#">A Tour of JSON Schema</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://json-schema.org/specification">Specification</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://json-schema.org/learn/getting-started-step-by-step">Documentation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://json-schema.org/implementations">Tooling</a>
        </li>
      </ul>
    </div>
  </nav>
</>
)
}
