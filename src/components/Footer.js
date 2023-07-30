function Footer() {
  return <footer className="page-footer blue darken-4">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="grey-text text-lighten-2">About the Project</h5>
          <p className="grey-text text-lighten-2">React app about movies.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="grey-text text-lighten-2">Other Projects</h5>
          <ul>
            <li><a className="grey-text text-lighten-2" href="/react-movies/" target="_blank">React Movies</a></li>
            <li><a className="grey-text text-lighten-2" href="/react-shop/" target="_blank">React Shop</a></li>
            <li><a className="grey-text text-lighten-2" href="/react-food/" target="_blank">React Food</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright grey-text text-lighten-2">
      <div className="container">
        © 2023 Copyright
        <a className="right grey-text text-lighten-2" href="https://github.com/nick2101/react-shop" target="_blank"
           rel="noreferrer">Github</a>
      </div>
    </div>
  </footer>
}

export {Footer};
