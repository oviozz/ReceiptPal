
function MidView() {
    return (
        <div className={"flex flex-col"}>

            <div className="relative lg:flex md:flex items-center justify-center lg:space-x-10 p-8 animate-fade-right">

                <div className="flex flex-col max-w-lg ">
                    <h1 className="font-bold text-gray-800 lg:text-5xl text-[1.9rem] drop-shadow-md mb-4">Simple Receipt Tracker</h1>
                    <p className="text-xl font-light text-gray-600 " style={{ fontFamily: "'Product Sans Light', sans-serif" }}>
                        Record daily transactions effortlessly. Categorize them into clear and visualized
                        categories such as Stores (Food, Shopping) or Income (Salary, Gift).
                    </p>
                </div>

                <div className={"relative"}>
                    <img
                        className="rounded-lg shadow-md lg:w-40 md:w-40 w-full lg:mt-0 mt-5 themeBtn"
                        src="https://i.pinimg.com/564x/91/92/63/91926392e1128a5bb7e506a40d85349c.jpg"
                        alt="Receipt Tracker"
                    />

                    <img
                        className={"absolute lg:block hidden -top-7 left-44 transform rotate-90 "}
                        width={"40"}
                        src={"sidearrow.png"}
                        alt="Arrow"
                    />
                </div>

            </div>


            <div className="relative lg:flex  flex-col items-center justify-center p-8 lg:space-x-10 animate-fade-right">

                <div className={"lg:flex gap-3 rounded"}>

                    <img
                        className="themeBtn rounded-lg shadow-md lg:w-72 h-96 w-full md:w-full lg:mt-0 lg:mb-0 mb-7"
                        src="receipt2.jpg"
                        alt="Receipt Tracker"
                    />

                    <img className={"lg:block hidden object-contain top-1/2"} width={"120"} src={"doublearrow.png"} />

                    <div className="drop-shadow-lg bg-white rounded-lg p-8 border-dashed border-2 border-black max-w-1/4">

                        <h2 className="text-2xl font-bold mb-4">Station #5 SERV #648</h2>

                        <div className="grid grid-cols-2 gap-4">

                            <div className="col-span-2">
                                <div className="flex justify-between">
                                    <span>Turkey Burger</span>
                                    <span>$12.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Chicken Pot Pie</span>
                                    <span>$11.50</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Roast Chicken</span>
                                    <span>$13.50</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Salad</span>
                                    <span>$8.95</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Brussel Sprouts</span>
                                    <span>$7.95</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Iced Tea</span>
                                    <span>$3.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Soda</span>
                                    <span>$3.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Lemonade</span>
                                    <span>$5.00</span>
                                </div>
                            </div>

                            <div className="col-span-2 mt-4">
                                <div className="flex justify-between border-t pt-4">
                                    <span className="font-bold">Total:</span>
                                    <span className="font-bold">$70.74</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default MidView;
