import Navbar from "./header/Navbar";
import SubHeader from "./header/SubHeader";

const Layout = ({ children }) => {
  return (
    <>
      <SubHeader />
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
