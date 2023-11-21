
import "./Home.css"
import {Link} from "react-router-dom";

function TopView(){

    return (

        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-7 lg:flex lg:items-center">
                <div className="mx-auto text-center">

                    <div className={"relative animate-fade-left"}>


                        <div className={"title"} >
                            <h1 className=" lg:text-7xl text-4xl font-semibold sm:text-7xl text-gray-800 outlined-title">
                                Scan, Track, Budget
                            </h1>
                            <h1 className=" lg:text-7xl text-4xl font-semibold text-purple-700 sm:block outlined-subtitle">
                                Your Receipt Pal.
                            </h1>
                        </div>

                        <img className={"drop-shadow-2xl absolute top-0 right-14 lg:block hidden rotate-12 -mt-16"} src={"receipt.png"} width={'400'} />

                    </div>


                    <p className="drop-shadow-md mt-4 sm:text-2xl text-md animate-fade-left" style={{ fontFamily: "'Product Sans Light', sans-serif" }}>
                        Empower Your Wallet with BudgetPal! Scan, Track!
                    </p>

                    <div className="mt-5 flex flex-wrap justify-center gap-4 animate-jump">


                        <div className={"lg:-ml-20 flex lg:flex-row flex-col lg:w-fit w-full gap-3"}>

                            <svg className={"lg:block hidden rotate-80 mt-5"} xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 225 63" fill="none">
                                <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M186.362 0.539835C183.378 1.79983 182.799 5.10579 185.061 7.98179C187.117 10.5948 195.468 12.5978 204.306 12.5978C206.873 12.5978 208.974 13.0478 208.974 13.5978C208.974 14.1478 207.435 14.5978 205.554 14.5978C203.163 14.5978 194.714 18.3438 177.506 27.0318C152.337 39.7388 140.172 44.6338 133.971 44.5508L130.474 44.5038L133.974 41.8538C140.685 36.7718 150.59 26.0648 152.774 21.5318C155.841 15.1668 155.69 9.58683 152.362 6.25883C146.989 0.885828 137.245 1.96582 129.486 8.79582C123.311 14.2318 117.93 25.2728 117.235 33.9348L116.712 40.4498L110.757 43.0328C94.3539 50.1468 76.6509 51.5798 69.7069 46.3568C68.1959 45.2198 68.4819 44.5628 72.6489 39.5978C78.6859 32.4058 82.9719 23.3438 82.9729 17.7708C82.9739 14.3208 82.3809 12.8518 80.0509 10.5208C74.8059 5.27579 67.3699 7.45183 61.5659 15.9308C56.7769 22.9268 54.8499 28.7628 54.5779 37.0978L54.3489 44.0978L47.7099 47.4118C44.0589 49.2338 37.4779 51.4678 33.0869 52.3758C26.2539 53.7888 24.0619 53.8488 17.8829 52.7888C13.9119 52.1078 8.95287 50.5898 6.86287 49.4148C3.71787 47.6478 2.79587 47.5008 1.51787 48.5608C-4.30313 53.3928 7.50487 61.3698 21.8519 62.2978C31.9199 62.9488 42.3019 60.6868 52.1269 55.7008C59.5199 51.9498 59.9039 51.8638 61.4769 53.6008C63.9789 56.3658 71.8059 59.3668 78.4799 60.1188C86.6569 61.0408 101.268 58.3998 111.848 54.0858L120.272 50.6518L123.581 53.5568C129.882 59.0898 139.862 58.3748 156.956 51.1648C166.45 47.1608 187.955 35.6048 198.209 28.9978L204.943 24.6578L204.325 31.9778C203.599 40.5658 204.539 49.6198 206.424 52.1978C207.584 53.7848 207.978 53.8398 209.447 52.6198C212.638 49.9718 216.782 40.0258 220.51 26.0708C222.563 18.3858 224.448 10.4828 224.698 8.50883C225.446 2.61483 224.055 2.00479 208.131 1.24479C200.422 0.876791 192.845 0.367833 191.294 0.112833C189.743 -0.142167 187.524 0.0498346 186.362 0.539835ZM143.075 17.3478C140.919 21.5158 131.369 31.3258 130.405 30.3628C127.945 27.9018 138.54 13.5978 142.823 13.5978H145.015L143.075 17.3478ZM73.9739 19.1308C73.9739 21.4178 69.4879 29.8288 67.1319 31.9568C65.0779 33.8138 65.0759 33.8108 66.1119 29.9568C68.1049 22.5398 73.9739 14.4578 73.9739 19.1308Z" fill="#7E22CE"/>
                            </svg>

                                <Link to={"/dashboard"}
                                    className="font-semibold themeBtn rounded bg-purple-600 px-12 py-3 text-sm text-white shadow hover:bg-purple-700 focus:outline-none focus:ring sm:w-auto"
                                >
                                    Get Started
                                </Link>

                        </div>

                        <a
                            className="lg:w-fit md:w-full w-full font-semibold themeBtn rounded px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 focus:outline-none focus:ring sm:w-auto"
                            href="/about"
                        >
                            Learn More
                        </a>
                    </div>

                    <div className="mt-7 relative">
                        <img className="drop-shadow-2xl absolute -top-4 -rotate-12 left-56 w-9 lg:block hidden" src="Doodle 4.png" alt="Doodle" />

                        <img
                            className="themeBtn animate-fade-up rounded-md shadow-md lg:w-3/5 h-auto mx-auto"
                            src="home.png"
                            alt="Receipt Ninja"
                        />

                        <img className="drop-shadow-2xl absolute -bottom-6 rotate-180 right-56 w-9 lg:block hidden" src="Doodle 4.png" alt="Doodle" />

                    </div>

                </div>
            </div>
        </section>
    );



}


export default TopView;