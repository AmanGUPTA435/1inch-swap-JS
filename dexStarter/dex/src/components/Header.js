import React from 'react';
import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";
import { Link } from 'react-router-dom';

function Header(props) {

  const {isConnected,connect,address}=props;
  
  return (
    // <div>Header</div>
    <header>
      <div className='leftH'>
        <img src={Logo} alt='logo' className='logo'></img>
        <Link to="/" className='link'>
          <div className='headerItem'>Swap</div>
        </Link>
        <Link to="/tokens" className='link'>
          <div className='headerItem'>Tokens</div>
        </Link>

      </div>
      <div className='rightH'>
        <div className='headerItem'>
          <img src={Eth} alt='eth' className='eth'></img>
          Ethereum
        </div>
        <div className='connectButton' onClick={connect}>
          {isConnected ? (address.slice(0,4)+"..."+address.slice(38)):"Connect"}
        </div>
      </div>
    </header>
  )
}

export default Header