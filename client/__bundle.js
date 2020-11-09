const contractAbi = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_pin",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_mobile",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_adv",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_pub",
                "type": "bool"
            }
        ],
        "name": "createAcc",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_str",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_zip",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_country",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_town",
                "type": "string"
            }
        ],
        "name": "setShipTo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_mobile",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_bright",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_veri",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_col",
                "type": "uint256"
            }
        ],
        "name": "setSellerAcc",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "showMe",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "showMyShipTo",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "showMySelerAcc",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_pin",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_mobile",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_adv",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_pub",
                "type": "bool"
            }
        ],
        "name": "editMe",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_mobile",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_bright",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_veri",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_col",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_pin",
                "type": "uint256"
            }
        ],
        "name": "editMySellerAcc",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_str",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_zip",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_country",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_town",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_pin",
                "type": "uint256"
            }
        ],
        "name": "editMyShipping",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pin",
                "type": "uint256"
            }
        ],
        "name": "delMe",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pin",
                "type": "uint256"
            }
        ],
        "name": "delMySellerData",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pin",
                "type": "uint256"
            }
        ],
        "name": "delMyShipping",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const contractAddress = '0x3E7eA9D41F5bB479a00081893Ecb48e3580754d4';
const web3 = new Web3("ws://localhost:7545");
let mainIII6 = new web3.eth.Contract(contractAbi, contractAddress);
// web3.eth.getAccounts().then(console.log); // account check //

document.addEventListener("DOMContentLoaded", () => {
    const $account = document.getElementById("account");

    web3.eth.getAccounts().then(_accounts => {
        accounts = _accounts;
    })
    const showMe = () => {
        mainIII6.methods.showMe().call().then(result => {
            $account.innerHTML = (result[0] + "<br/>" + result[1] + "<br/>" + result[2] + "<br/>" + result[3]);
        });
    };
    showMe();

})

