
import "./NavLogo.css"
import {Link} from "react-router-dom";

function NavLogo(){

    return (
        <Link to={"/"}>
            <div className={"flex logo-drop-shadow text-xl lg:text-2xl "}>
                <h1 className={'font-bold bg-lime-400 py-0.5 px-2 rounded-tl-md rounded-bl-md budget'}>Budget</h1>
                <h1 className={"font-bold bg-purple-500 py-0.5 px-2 rounded-tr-md rounded-br-md pal"}>Pal</h1>
            </div>
        </Link>
    )


}


export default NavLogo;