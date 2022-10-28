import Navbar from "./Navbar";
import SubHeader from "./SubHeader";

const Layout = ({ children }) => {
  return (
    <>
      {/* <SubHeader /> */}
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
