export default function header() {
  return (
    <header className="header">
      <img src="img/favicon.png" alt="Abode Logo" className="header__logo" />
      <h3 className="heading-3">Your own home</h3>
      <h1 className="heading-1">The ultimate happiness destination</h1>
      <button className="btn header__btn">Search Properties</button>
      <div className="header__seenon-text">As seen on</div>
      <div className="header__seenon-logos">
        <img src="img/logo-bbc.png" alt="Seen on BBC" />
        <img src="img/logo-forbes.png" alt="Seen on Forbes" />
        <img src="img/logo-techcrunch.png" alt="Seen on Tech Crunch" />

        <img src="img/logo-bi.png" alt="Seen on Business Insider" />
      </div>
    </header>
  );
}
