
import {Link} from "react-router-dom";
import NavBarLayout from "../NavBar/NavBarLayout.jsx";

function Register(){

    return (
        <NavBarLayout>
            <div className={"px-4 flex justify-center items-center"}>

                <div className={"flex flex-col w-full justify-center items-center gap-5 h-[calc(100vh-8rem)]"}>
                    <img src={"downarrow.png"} className={"w-20 drop-shadow-2xl"}/>
                    <div className={"animate-jump bg-white p-5 w-full max-w-md themeBtn rounded-md space-y-10 "}>

                        <div>
                            <h1 className={"font-bold text-4xl"}>Register</h1>
                            <h2 className={"text-3xl font-bold "}>to get started</h2>
                        </div>

                        <button className="font-bold themeBtn hover:scale-105 flex items-center justify-center w-full text-white bg-blue-700 border py-2 px-4 rounded">
                            <img  src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                                  alt="Google Icon" className="bg-white rounded p-1 w-8 h-8 mr-2"/>
                            Register with Google
                        </button>

                        <form  className={"flex flex-col space-y-5 "}>

                            <input
                                className={"themeBtn themefocus font-bold border rounded p-2 focus:outline-0"}
                                type={"email"}
                                name={"Email"}
                                placeholder={"Email"}
                                required
                            />

                            <input
                                className={"themeBtn themefocus font-bold border rounded p-2 focus:outline-0"}
                                type={"password"}
                                name={"Password"}
                                placeholder={"Password"}
                                required
                            />

                            <div className={"space-y-0.5"}>

                                <button className={"themeBtn font-bold w-full bg-blue-700 text-white py-2 px-4 rounded"}>
                                    Register
                                </button>

                                <h1 className={"text-red-700 text-center"}>{''}</h1>
                            </div>

                        </form>


                        <h1 className={"text-center font-bold"}>Already registered? <Link to={"/login"} className={"font-bold hover:text-blue-700 hover:cursor-pointer underline"}>Register</Link></h1>
                    </div>
                </div>

            </div>
        </NavBarLayout>
    )






}

export default Register;