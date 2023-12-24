import React , {Component} from "react";
import sell from '/src/assets/buy-and-sale.jpg' ;

class Product extends Component {
    render() {
        return (
                <div className="flex xl:justify-between justify-around flex-wrap py-16 bg-secondary">

                    <div className="xl:w-1/5 w-1/3 md:mx-3 mx-1 bg-slate-300 rounded-md mt-5 hover:drop-shadow-2xl hover:scale-105">
                        <div>
                            <img className="w-fit rounded-t-md" src={sell} alt="" />
                        </div>
                        <div className="p-2">
                            <p className="text-xl my-2 text-bold font-bold">Dodge charger</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <div className="text-center">
                                <button className="lg:w-full md:w-1/2 w-full bg-secondary text-white p-1 mt-4"> Add to cart </button>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/5 w-1/3 md:mx-3 mx-1 bg-slate-300 rounded-md mt-5 hover:drop-shadow-2xl hover:scale-105">
                        <div>
                            <img className="w-fit rounded-t-md" src={sell} alt="" />
                        </div>
                        <div className="p-2">
                            <p className="text-xl my-2 text-bold font-bold">Dodge charger</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <div className="text-center">
                                <button className="lg:w-full md:w-1/2 w-full bg-secondary text-white p-1 mt-4"> Add to cart </button>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/5 w-1/3 md:mx-3 mx-1  bg-slate-300 rounded-md mt-5 hover:drop-shadow-2xl hover:scale-105">
                        <div>
                            <img className="w-fit rounded-t-md" src={sell} alt="" />
                        </div>
                        <div className="p-2">
                            <p className="text-xl my-2 text-bold font-bold">Dodge charger</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <div className="text-center">
                                <button className="lg:w-full md:w-1/2 w-full bg-secondary text-white p-1 mt-4"> Add to cart </button>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/5 w-1/3 md:mx-3 mx-1 bg-slate-300 rounded-md mt-5 hover:drop-shadow-2xl hover:scale-105">
                        <div>
                            <img className="w-fit rounded-t-md" src={sell} alt="" />
                        </div>
                        <div className="p-2">
                            <p className="text-xl my-2 text-bold font-bold">Dodge charger</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <div className="text-center">
                                <button className="lg:w-full md:w-1/2 w-full bg-secondary text-white p-1 mt-4"> Add to cart </button>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}

export default Product