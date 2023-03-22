function Header() {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.toggle("add");
  }

  return (
    <header>
      <div className="manu-bar-mobile">
        <ul>
          <li>
            <a href="#">Sounds</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Plugins</a>
          </li>
          <li>
            <a href="#">Studio</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-6 header-left-part">
            <a href="#">
              <div className="header-logo"></div>
            </a>
            <div className="links">
              <a href="#">Sounds</a>
              <a href="#">Skills</a>
              <a href="#">Plugins</a>
              <a href="#">Studio</a>
              <a href="#">Community</a>
              <a href="#">Blog</a>
              <a href="#">Pricing</a>
            </div>
            <div className="manu-bar">
              <a href="#" onClick={hiddenManu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="24"
                  viewBox="0 0 28 24"
                >
                  <path
                    fill="white"
                    d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-6 header-right-part">
            <div className="header-links">
              <a className="header-link-login">Login</a>
              <a className="header-link-sing">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
