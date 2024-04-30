import Account from "./Account";
import Bars from "./Bars";
import Logo from "./Logo";
import Team from "./Team";

const NavBar = () => {
  return (
    <div className="py-4 shadow-sm relative flex h-screen w-14 flex-col bg-white">
      <Logo />
      <Bars />
      <Team />
      <Account />
    </div>
  );
};

export default NavBar;
