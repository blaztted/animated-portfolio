import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Bruno Dev</span>
        <div className="social">
          <a href="#">
            {" "}
            <img src="/instagram.png" alt="" />
            <img src="/linkedin.png" alt="" />
            <img src="/mail.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
