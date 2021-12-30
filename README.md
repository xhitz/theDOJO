# theDOJO 

> @title      : theDOJO v1
> author     : stereoIII6
> @coAuthor   : xnode
> @company    : fractio incorporated
> @emails     : aron@fractio.xyz, nmisner@fractio.xyz
> @about      : theDOJO is a vanilla truffe web3 scaffolding setup that allows an easy quick setup for defi projects and dapps. It uses the most basic setup but allow complex projects without overbloated npm libraries noone can keep up to date with all the modern features that other frameworks on npm deliver.
> @devtech    : truffle, solidity, javascript, json, html, css 

## Installation 

> Install Truffle  ```npm i -g truffle```

> Create a directory ```mkdir ROOT_DIR``` 

> navigate into it ```cd ROOT_DIR``` 

>clone the repo into the directory ```git clone https://github.com/stereoIII6/theDOJO.git .```

> Install Repo Dependencys and Node Modules ```npm i```

> fix webpack issues ```export NODE_OPTIONS=--openssl-legacy-provider```

## Initialization

> You will need to open ```.conf_env``` and edit the seedphrase, admin address, and the infura api codes and finally save the file as ```.env``` :: CAUTION : make sure not to leave sensitive data in any file but ```.env```. In production these values will have to be hidden server vars. Only use Mumbai Testnetwork until you know what you are doing. Be cautionate about which seedphrase and admin account you intend to use for which project to protect your funds. ::

> Then you will need to compile and migrate the contracts ```npm run migrate:<network>``` you can choose from main, polygon, mumbai, optimism & arbitrum to migrate the contracts onto the wanted chain/s.

## Operation

> Run project in local environment ```npm run dev```

> Visit Your Website on -> ```http://localhost:8080```

> If you edit the sourcecode your Server automatically updates the website on save





## Directory Structure & Important Files

```root
: build // build dir
:: contracts // abi build dir
::: soxiety.json // contract data incl abi

: contract
:: s0xiety.sol // smart contract

: client // source code dir JS
:: index.js // project Source JS (CODE HERE)

: migrations // blockchain migration dir
:: 1_initial_migration.js // migration init
:: 2_deploy_s0x.js // smart contract migration conf

: public // source dir HTML
:: images
::: favicon.png // page favicon
:: index.html // source code HTML (CODE HERE)
:: (bundle.js)

: test // test dir
:: s0xiety.js // smart contract test

: package.json // npm config
: truffle-config.js // truffle config
: webpack.config.js // webpack config 

: .env // hidden vars envelope
: .gitignore // git ignore file list
```

## Minimum Dependencies

    @metamask/detect-provider
    @openzeppelin/contracts
    @openzeppelin/test-helpers
    @truffle/hdwallet-provider
    bignumber
    dotenv
    mocha
    static-server
    underscore