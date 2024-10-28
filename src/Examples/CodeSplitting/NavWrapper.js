import { Link, Outlet } from "react-router-dom";

const NavWrapper = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default NavWrapper;
