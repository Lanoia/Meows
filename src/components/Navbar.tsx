import Logo from "../components/logo.tsx";
import Menu from "../components/Menu.tsx";
import NavbarButton from "./NavbarButton.tsx";

function LeftSide() {
  return (
    <div className="section1">
      <Logo />
      <Menu />
      <NavbarButton />
    </div>
  );
}

export default LeftSide;
