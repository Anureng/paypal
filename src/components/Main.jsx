import React, { useState } from 'react'
import Send from "./Send"
import Recipients from "./Recipients"
import RecentTx from "./RecentTx"
import GlobalTx from "./GlobalTx"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function Main() {
    const [route, setRoute] = useState('send')

    return (
        <BrowserRouter>
            <div className=' h-[39.5rem] bg-gray-800
            flex flex-col items-center 
            '>
                <div className='border border-black rounded-xl p-2 text-white'>
                    <div className='bg-[#113984] text-white rounded-xl'>

                        <ul className="flex space-x-24 font-medium text-2xl p-2 ">
                            <li className='border border-gray-white px-2 rounded-xl py-1'>
                                <Link to="/send">Send</Link>
                            </li>
                            <li className='border border-gray-white px-2 rounded-xl py-1'>
                                <Link to="/recipents">Recipents</Link>
                            </li>
                            <li className='border border-gray-white px-2 rounded-xl py-1'>
                                <Link to="/recentTx">RecentTx</Link>
                            </li>
                            <li className='border border-gray-white px-2 rounded-xl py-1'>
                                <Link to="/globalTx">GlobalTx</Link>
                            </li>
                        </ul>
                    </div>
                    <Routes>
                        <Route path='/send' element={<Send />} >
                        </Route>
                        <Route path='/recipents' element={<Recipients />} >
                        </Route>
                        <Route path='/recentTx' element={<RecentTx />} ></Route>
                        <Route path='/globalTx' element={<GlobalTx />} ></Route>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default Main