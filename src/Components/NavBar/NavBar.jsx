
import NavLogo from "./NavComp/NavLogo/NavLogo.jsx";
import NavLists from "./NavComp/NavLists/NavLists.jsx";


function NavBar() {
    return (
        <div className={"p-4 flex lg:justify-around justify-between animate-fade-down"}>
            <NavLogo />
            <NavLists />
        </div>
    );
}

export default NavBar;
