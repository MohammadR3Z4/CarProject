import React , {Component} from "react";
import logoDodge from '/src/assets/dodge-logo.svg' ;
import Humberger from "./humberger";
import Styled from "styled-components" ;

const ResNav = Styled.div`
    display: none;
    z-index: 9;
    width: 284px;
    height: 100vh;
    padding-top: 100px;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    @media (max-width: 640px){
        display : ${(props) => props.position ? "block" : "none"}
    }
`

class Nav extends Component {
    constructor()
    {
        super()
        this.state = {
            open : false 
        }
    }

    humbergerMenu = () => {
        this.setState({
            open : !this.state.open 
        }, () => {console.log(this.state.open)})
    }

    render() {
        const {open} = this.state 
        return (
            <div>
                <nav className="p-4 flex justify-between">
                    <div className="order-2 sm:order-1">
                        <a href="#"><img className="w-16 h-16" src={logoDodge} alt="logo dodge" /></a>
                    </div>
                    <div className="flex order-1 sm:order-2">
                        <div className="cursor-pointer z-10 sm:hidden block mt-4" id="res-ul" onClick={ this.humbergerMenu } >
                            <Humberger />
                        </div>
                        <ul className="mt-4 ">
                            <li className="sm:inline-block lg:text-lg lg:me-4 sm:text-sm sm:me-2 hidden"><a href="#"> Services </a></li>
                            <li className="sm:inline-block lg:text-lg lg:me-4 sm:text-sm sm:me-2 hidden"><a href="#"> Product </a></li>
                            <li className="sm:inline-block lg:text-lg lg:me-4 sm:text-sm sm:me-2 hidden"><a href="#"> About us </a></li>
                            <li className="sm:inline-block lg:text-lg lg:me-8 sm:text-sm sm:me-2 hidden"><a href="#"> Contact us </a></li>
                        </ul>
                        <button className="lg:w-32 lg:text-base sm:w-28 sm:text-sm p-2 sm:inline-block border-2 border-main rounded-full hidden"> SignUp | Login </button>
                    </div>   
                </nav>

                <ResNav position={open} className="res-nav">
                    <ul className="p-4">
                        <li className="lg:text-lg lg:me-4 sm:text-sm mt-3 sm:me-2"><a href="#"> Services </a></li>
                        <li className="lg:text-lg lg:me-4 sm:text-sm mt-3 sm:me-2"><a href="#"> Product </a></li>
                        <li className="lg:text-lg lg:me-4 sm:text-sm mt-3 sm:me-2"><a href="#"> About us </a></li>
                        <li className="lg:text-lg lg:me-8 sm:text-sm mt-3 sm:me-2"><a href="#"> Contact us </a></li>
                    </ul>
                    <button className="w-28 text-sm p-2 ms-2 inline-block border-2 border-main rounded-full"> SignUp | Login </button>
                </ResNav>
            </div>
        )
    }
}

export default Nav