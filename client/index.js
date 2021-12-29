//////////////////////////////////////////
//                                      //
//          MAIN CONTRACT               //
//          III6 LifeAnd.Eth            //
//          stereoIII6                  //
//          stereodocbush@gmail.com      //
//                                      //
//////////////////////////////////////////

import Web3 from 'web3';
import detectEthereumProvider from "@metamask/detect-provider";
const s0xiety = require("../build/contracts/s0xiety.json");

//////////////////////////////////////////
//                                      //
//          Init Metamask               //
//                                      //
//////////////////////////////////////////

const initialize = () => {
    //Basic Actions Section
    const onboardButton = document.getElementById('connectButton');
    const networkButton = document.getElementById('networkButton');
    const walletButton = document.getElementById('walletButton');
    const iii6 = document.getElementById('iii6');
    const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };
    const clickInstall = () => {
        alert("You are being redirected to the official download of Metamask.io ... Please Follow their installation instructions.");
        window.open("https://metamask.io");
    };
    const onClickConnect = async () => {
        try {
          // Will open the MetaMask UI
          onboardButton.innerHTML = 'Connecting ...';
          // You should disable this button while the request is pending!
          await ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await ethereum.request({ method: 'eth_accounts' });
          const network = await ethereum.request({method: 'net_version'});
          var networkTag = "Switch Network";
        //We take the first address in the array of addresses and display it
                            if(Number(network) === 80001) networkTag =  "Mumbai";
                            if(Number(network) === 1) networkTag =  "ETH";
                            if(Number(network) === 137) networkTag =  "Polygon";
                            if(Number(network) === 100) networkTag =  "xDai";
                            if(Number(network) === 10) networkTag =  "Optimism";
                            if(Number(network) === 200) networkTag =  "Arbitrum";
                            if(Number(network) === 43224) networkTag =  "Avalanche";
                            if(Number(network) === 1312) networkTag = "ACAB";

        networkButton.innerHTML = networkTag;
        onboardButton.innerHTML = accounts[0].slice(0,5)+"..."+accounts[0].slice(38,42) || 'Connect';
        } catch (error) {
          console.error(error);
          onboardButton.innerText = 'Connect';
        }
    };
    const MetaMaskClientCheck = () => {
        //Now we check to see if MetaMask is installed
        if (!isMetaMaskInstalled()) {
        //If it isn't installed we ask the user to click to install it
        onboardButton.innerText = 'Click here to install MetaMask!';
        onboardButton.addEventListener("click",clickInstall);
        } else {
        //If it is installed we change our button text
        onboardButton.innerText = 'Connect';
        onboardButton.addEventListener("click",onClickConnect);
        }
    };
    MetaMaskClientCheck();
}
const loadContracts = () => {
    const s0xContract = new Web3.eth.Contract(abi,address);
}
const log = () => {};


//////////////////////////////////////////
//                                      //
//          Connect Web3                //
//                                      //
//////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    initialize();
    loadContracts();
});