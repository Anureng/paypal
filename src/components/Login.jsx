import React, { useState, useContext } from 'react'
import { Appstate } from '../App'


function Login() {
    const AppState = useContext(Appstate)

    const { ethereum } = window
    const [error, setError] = useState('')
    const Loginwallet = async () => {
        try {
            await ethereum.request({
                method: 'wallet_requestPermissions',
                params: [
                    {
                        eth_accounts: {}
                    }
                ]
            })
            const accounts = await ethereum.request({ method: "eth_requestAccounts" })
            AppState.setLogin(true)
            AppState.setAddress(accounts[0]);


            const chainID = await ethereum.request({ method: "eth_chainId" })
            if (chainID === '0x5') {
                AppState.seChain('Georli')
            }
            else {
                setError('use only georli');
                AppState.setLogin(true);
            }
        } catch (error) {
            setError(`${error.message}`)
        }
    }
    return (
        <>
            <div className='border border-black h-screen  flex items-center justify-center flex-col space-y-4 bg-gray-800'>
                <div> <img src={"paypal.png"} className=" h-28" /></div>
                <div className='border border-black flex items-center 
                justify-center flex-col px-2 py-4  xl:w-1/3 w-2/3 h-56 space-y-8 bg-gray-900 rounded-xl text-white'>
                    <p className='text-4xl font-bold'>Login</p>

                    <div>

                        {
                            ethereum != undefined
                                ?
                                <div>

                                    <button onClick={Loginwallet} className='text-2xl border border-black bg-[#113984]  rounded-md px-2 py-4'>Connect with Metamask</button>
                                </div>
                                :
                                <div className='space-y-2'>
                                    <a target={"_blank"} href="https://metamask.io/">
                                        <button className='text-2xl border border-black bg-[#113984]  rounded-md px-2 py-4'>install the Metamask</button>
                                        <p className='text-red-700 flex flex-col items-center justify-center'>Loading Required Metamask </p>
                                    </a>
                                </div>
                        }
                    </div>
                    <p className='text-red-700'>{error}</p>
                </div>
            </div>

        </>
    )
}

export default Login