import React , {Component} from "react";
import styles from '/src/components/header.module.css'

class Header extends Component {
    render() {
        return (
            <header className="header flex justify-center">
                <div className="text-center">
                    <p className="lg:text-3xl text-white mt-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="lg:w-64 w-48 h-14 bg-main rounded-xl inline mt-9"> See more </button>
                </div>
            </header>
        )
    }
}

export default Header