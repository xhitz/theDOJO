//////////////////////////////////////////
//                                      //
//          MAIN CONTRACT               //
//          III6 LifeAnd.Eth            //
//          stereoIII6                  //
//          stereodocbush@gmail.com      //
//                                      //
//////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//          IMPORTS                     //
//                                      //
//////////////////////////////////////////
import Web3 from 'web3';
import MainIII6 from '../build/contracts/MainIII6.json';
//////////////////////////////////////////
//                                      //
//          GLOBALS                     //
//                                      //
//////////////////////////////////////////
let web3;
let mainIII6;
//////////////////////////////////////////
//                                      //
//          Web3 Init                   //
//                                      //
//////////////////////////////////////////

const initWeb3 = () => {
    return new Promise((resolve, reject) => {
        if (typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            window.ethereum.enable()
                .then(() => {
                    resolve(
                        new Web3(window.ethereum)
                    );
                })
                .catch(e => {
                    reject(e);
                });
            return;
        }
        if (typeof window.web3 !== 'undefined') {
            return resolve(
                new Web3(window.web3.currentProvider)
            );
        }
        // resolve(new Web3('http://localhost:7545'));
    });
};
//////////////////////////////////////////
//                                      //
//          Contract Init               //
//                                      //
//////////////////////////////////////////
const initContract = () => {
    const deploymentKey = Object.keys(MainIII6.networks)[0];
    return new web3.eth.Contract(
        MainIII6.abi,
        MainIII6
            .networks[deploymentKey]
            .address
    );
};
//////////////////////////////////////////
//                                      //
//          App Init                    //
//                                      //
//////////////////////////////////////////
const initApp = () => {

    // INCLUDE ELEMENTS 

    const $userForm = document.getElementById('userForm');
    const $nameInput = document.getElementById('nameInput');
    const $pinInput = document.getElementById('pinInput');
    const $emailInput = document.getElementById('emailInput');
    const $mobileInput = document.getElementById('mobileInput');
    const $pubInput = document.getElementById('pubInput');
    const $advInput = document.getElementById('advInput');
    const $admInput = document.getElementById('admInput');
    const $account = document.getElementById('account');
    let accounts = [];
    let logged = false;




    web3.eth.getAccounts() // DO SHOWME()
        .then(_accounts => {
            accounts = _accounts;
            console.log(accounts);
            return mainIII6.methods
                .showNow(accounts[0])
                .call();
        })
        .then(result => {
            mainIII6.methods.amIuser(accounts[0]).call().then(logCheck => { // DO LOGCHECK
                logged = logCheck;
                console.log(logged);


                if (logged) { // IF LOGGED IN

                    $account.innerHTML = result[0] + "<br />" + result[1] + "<br />" + result[2] + "<br />" + result[4] + "<br />" + result[3];
                    $nameInput.value = result[0];
                    $emailInput.value = result[1];
                    $mobileInput.value = result[5];
                    if (result[4] > 11) $pubInput.checked = true;   // IF PUB
                    else $pubInput.checked = false;
                    if (result[4] > 22) $advInput.checked = true;   // IF ADV
                    else $advInput.checked = false;
                    if (result[4] > 55) {                           // IF ADMIN
                        $userForm.classList = "visible";
                        $admInput.checked = true;
                        $admInput.classList = "visible";
                    }
                    else {                                          // IF ! ADMIN
                        $userForm.classList = "visible";
                        $admInput.checked = false;
                        $admInput.classList = "invisible";
                    }
                }
                else { // IF ! LOGGED IN
                    $userForm.classList = "visible";
                    $account.innerHTML = ""; $account.innerHTML = "Please Create an Account";
                    $admInput.checked = false;
                    $admInput.style.display = "none";
                    $userForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const data = e.target.elements;
                        console.log(data, "create");
                        mainIII6.methods
                            .createAcc(e.target.elements[0].value, e.target.elements[1].value, e.target.elements[2].value, e.target.elements[3].value, e.target.elements[4].value, e.target.elements[5].value)
                            .send({ from: accounts[0] })
                            .then(result => {
                                // console.log(result);
                                return mainIII6.methods
                                    .showNow(accounts[0])
                                    .call();
                            })
                            .then(result => {
                                $account.innerHTML = result[0] + "<br />" + result[1] + "<br />" + result[2] + "<br />" + result[4] + "<br />" + result[3];
                            });
                    });
                }
            });

        });

    $userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = e.target.elements;
        console.log(data, 'edit');
        mainIII6.methods
            .editMe(e.target.elements[0].value, e.target.elements[1].value, e.target.elements[2].value, e.target.elements[3].value, e.target.elements[4].value, e.target.elements[5].value)
            .send({ from: accounts[0] })
            .then(result => {
                // console.log(result);
                return mainIII6.methods
                    .showMe(accounts[0])
                    .call();
            })
            .then(result => {
                $account.innerHTML = result[0] + "<br />" + result[1] + "<br />" + result[2] + "<br />" + result[4] + "<br />" + result[3];
            });
    });


};
//////////////////////////////////////////
//                                      //
//          Coonect Web3                //
//                                      //
//////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    initWeb3()
        .then(_web3 => {
            web3 = _web3;
            mainIII6 = initContract();
            initApp();
        })
        .catch(e => {
            console.log(e.message)
        });
});