import React, { useContext } from 'react'
import { Appstate } from '../App'
import { FaWallet } from 'react-icons/fa';
function Header() {
    const AppState = useContext(Appstate)

    return (
        <div className='bg-gray-800 h-32 text-white items-center flex p-2 justify-between'>
            <img src={"paypal.png"} className="h-14" />
            <div className='flex items-center space-x-4'>

                <p className='border   px-3 py-2 flex items-center gap-x-3 
            rounded-xl bg-[#113984]
            '>{AppState.address.slice(0, 6)}...{AppState.address.slice(38)}
                    <FaWallet />
                </p>
                <p className='border border-white rounded-xl px-3 py-2 bg-[#113984]'>GEORLI</p>
            </div>
        </div>
    )
}

export default Header