
import "./NavButton.css";

function NavButton({value, href, bg}){

    return (
        <div>
            <button className={`nav-drop-shadow py-1 font-semibold text-1xl rounded-md border-black border-2 ${bg}  `}>
                {value}
            </button>
        </div>
    )

}

export default NavButton;