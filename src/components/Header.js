function Header() {
  return <header>
    <nav className="blue darken-3">
      <div className="nav-wrapper">
        <a href="/react-shop/" className="brand-logo grey-text text-lighten-2">React <span
          className="old-logo yellow-text text-darken-2">FORTNITE</span> Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a className="grey-text text-lighten-2" href="/react-movies/" target="_blank">React Movies</a></li>
          <li><a className="grey-text text-lighten-2" href="/react-shop/" target="_blank">React Shop</a></li>
          <li><a className="grey-text text-lighten-2" href="/react-food/" target="_blank">React Food</a></li>
        </ul>
      </div>
    </nav>
  </header>
}

export {Header};
