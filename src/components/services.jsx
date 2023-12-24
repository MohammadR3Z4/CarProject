import React , { Component } from 'react'
import coin from '/src/assets/coin.svg'
import motor from '/src/assets/motor.svg'
import repair from '/src/assets/repair.svg'
import money from '/src/assets/money.svg'

class Services extends Component {
    render() {
        return (
            <div className='py-20'>
                <h1 className='ms-3 text-3xl mb-4'> Services :</h1>

                <div className='flex items-center justify-around flex-wrap md:mx-6 mx-2' >

                    <div className='md:w-fit md:my-0 my-4 w-1/2'>
                        <div>
                            <img className='md:ms-6 ms-1' src={coin} alt="coin" />
                        </div>
                        <div>
                            <p className='text-2xl'>Buy & Sale</p>
                        </div>
                    </div>

                    <div className=' md:w-fit w-1/2'>
                        <div>
                            <img className='md:ms-6 ms-1' src={repair} alt="coin" />
                        </div>
                        <div>
                            <p className='text-2xl ms-3'>Repair</p>
                        </div>
                    </div>

                    <div className='md:w-fit w-1/2'>
                        <div>
                            <img className='md:ms-6 ms-1' src={motor} alt="coin" />
                        </div>
                        <div>
                            <p className='text-2xl'>Tunning</p>
                        </div>
                    </div>

                    <div className=' md:w-fit w-1/2'>
                        <div>
                            <img className='md:ms-6 ms-1' src={money} alt="coin" />
                        </div>
                        <div>
                            <p className='text-2xl'>Rent a Car</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Services