import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3';

class App extends Component {

  async componentWillMount(){
    await this.loadweb3()
    await this.loadBlockchainData()
  }
  
  async loadweb3(){
    if(window.ethereum){
     window.Web3 =new Web3(window.ethereum)
     await window.ethereum.enable()
    }
    else if(window.web3){
      window.Web3 =new Web3(window.web3.currentProvider)
    }
    else{
      console.log('Non-Ethereum Browser Detected...')
    }
     
   }


  async loadBlockchainData(){
    const web3= window.Web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    this.setState({account:accounts[0]})
  }

  constructor(props){
    super(props)
    this.state={
      account:''
    }
  }
  
  
  
  render() {

    

    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.account}
          </a>
          <p>{this.state.account}</p>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
