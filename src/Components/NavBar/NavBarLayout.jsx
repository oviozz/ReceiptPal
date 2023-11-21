
import NavBar from "./NavBar.jsx";
import Footer from "./NavComp/Footer.jsx";

function NavBarLayout(props){

    return (
        <div className={"flex flex-col lg:gap-7"}>
            <NavBar  />
            {props.children}
            <Footer />
        </div>
    )

}


export default NavBarLayout;