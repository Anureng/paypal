import React, { useContext } from 'react'
import { FaWallet } from 'react-icons/fa';
import { Appstate } from '../App';


function Send() {
    const App = useContext(Appstate)


    return (
        <div className='h-[12rem] border border-black flex flex-row justify-center'>
            <div className='flex space-x-24  mt-3'>
                <div>
                    <p className='border border-black rounded-xl p-2'>$ ETH </p>
                </div>
                <div className='flex border border-black h-fit rounded-xl p-2 items-center space-x-2'>
                    <FaWallet />
                    <p>Balance : &nbsp;</p>
                    <p>{App.balance} Eth</p>
                </div>
            </div>

        </div>
    )
}

export default Send