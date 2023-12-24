import React, { Component } from 'react'
import call from '/src/assets/call.svg' 
import location from '/src/assets/location.svg' 
import mail from '/src/assets/mail.svg' 
import twitter from '/src/assets/twitter.svg' 
import whatsapp from '/src/assets/whatsapp.svg'
import linkedin from '/src/assets/linkedin.svg'
import instagram from '/src/assets/instagram.svg'

class Footer extends Component {
    render() {
        return (
            <div className='mt-14 pt-10 bg-slate-300'>
                <div className='flex justify-around flex-wrap'>
                    <div className='w-full md:w-fit'>
                        <div className='md:block flex justify-around mx-5'>
                            <div className="flex mt-10">
                                <img className='md:w-10 md:h-10 w-7 h-7' src={location} alt="location" />
                                <p className='mt-2 ms-2'>Prais , France</p>
                            </div>

                            <div className="flex mt-10">
                                <img className='md:w-10 md:h-10 w-7 h-7' src={call} alt="location" />
                                <p className='mt-2 ms-2'>+1 555 12345</p>
                            </div>
                        </div>

                        <div className="flex mt-10 justify-center">
                            <img className='md:w-10 md:h-10 w-7 h-7' src={mail} alt="location" />
                            <a className='mt-2 ms-2 text-blue-800' href='#'> companyname@email.com </a>
                        </div>

                    </div>
                    <div className='md:w-1/3 w-full m-5'>
                        <h1>ABOUT COMPANY</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rem odit tenetur illo animi obcaecati molestiae dolore culpa vel natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae .</p>
                        <div className='flex justify-around mt-4'>
                            <img className='md:w-10 md:h-10 w-7 h-7' src={twitter} alt="twitter" />
                            <img className='md:w-10 md:h-10 w-7 h-7' src={instagram} alt="instagram" />
                            <img className='md:w-10 md:h-10 w-7 h-7' src={linkedin} alt="linkedin" />
                            <img className='md:w-10 md:h-10 w-7 h-7' src={whatsapp} alt="whatsapp" />
                        </div>
                    </div>
                </div>

                <div className='bg-slate-700 h-8 w-full text-center'>
                    <p>CopyRight© 2023</p>
                </div>
            </div>
        )
    }
}

export default Footer