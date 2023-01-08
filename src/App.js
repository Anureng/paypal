import { createContext, useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Login from "./components/Login"
import { ethers } from 'ethers';


const Appstate = createContext();

function App() {
  const { ethereum } = window
  const [login, setLogin] = useState(false)
  const [address, setAddress] = useState('')
  const [chain, setChain] = useState('')
  const [balance, setBalance] = useState('')



  useEffect(() => {
    async function getBal() {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner();
      const balance = await signer.getBalance();
      setBalance(ethers.utils.formatEther(balance));
    }
    getBal()
  })




  return (
    <Appstate.Provider value={{ login, setLogin, address, setAddress, chain, setChain, balance, setBalance }}>

      <h1>
        {
          login ?
            <>
              <Header />
              <Main />
            </>
            :
            <Login />
        }
      </h1>
    </Appstate.Provider>

  );
}

export default App;
export { Appstate };