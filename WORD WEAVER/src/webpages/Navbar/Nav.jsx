import { FaSearch } from "react-icons/fa";

function Nav(){
    return(
        <>
        <div className="nav" style={{ width: "100vw" }}>
  {/*above is for menu*/}
  <div className="hyperlink">
    <a href="./../GALLERY/gallery.html">Gallery</a>
    <a href="./../DASHBOARD/dashboard.html">Dashboard</a>
  </div>
  <div className="logos">
    <div className="logo" style={{ marginRight: "19vw" }}>
      <a href="../MAIN/Homepage.html">
        <img src="../IMAGES/wordweaverlogo4.png" alt="" id="logo" />
      </a>
    </div>
    {/*above is for hyperlink*/}
    <div className="logo">
      <div className="sicon">
        <FaSearch />
        <input type="text" placeholder="SEARCH" />
      </div>
    </div>
    <div className="buttons">
      <div>
        <a href="./../SIGNIN/signin.html" style={{ fontWeight: "bolder" }}>
          <button id="buttons1"> SIGN UP</button>
        </a>
      </div>
      <div>
        <a style={{ fontWeight: "bolder" }}>
          <button id="buttons2">SIGN IN</button>
        </a>
      </div>
    </div>
  </div>
  {/*above is for logo*/}
  {/*above is for signup login*/}
</div>

        </>
    )
}
export default Nav;