
import TopView from "./TopView.jsx";
import MidView from "./MidView.jsx";
import NavBarLayout from "../../Components/NavBar/NavBarLayout.jsx";


function Home() {

    return (

        <NavBarLayout>
            <TopView />
            <MidView />
        </NavBarLayout>

    )

}

export default Home;
