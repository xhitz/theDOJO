# theDOJO

## Installation 

> Install Truffle  ```npm i -g truffle```

> Create a directory ```mkdir ROOT_DIR``` 

> navigate into it ```cd ROOT_DIR``` 

>clone the repo into the directory ```git clone https://github.com/stereoIII6/theDOJO.git .```

> Install Repo Dependencys and Node Modules ```npm i```

> fix webpack4 issues ```export NODE_OPTIONS=--openssl-legacy-provider```

> Run project in local environment ```npm run dev```

> Visit Your Website on -> ```http://localhost:8080```

> If you edit the sourcecode your Server automatically updates the website on save





## Directory Structure & Important Files

```root
: build
:: contracts
::: MainIII6.json

: contract
:: MainIII6.sol
:: RFT.sol

: client
:: index.js

: migrations
:: 1_initial_migration.js
:: 2_deploy_mainIII6.js

: public
:: index.html
:: (bundle.js)

: test
:: MainIII6.js
:: RFT.js

: package.json
: truffle-config.js
: webpack.config.js

: .env
: .gitignore
```

## Dependencies

    @metamask/detect-provider
    @openzeppelin/contracts
    @openzeppelin/test-helpers
    @truffle/hdwallet-provider
    bignumber
    dotenv
    mocha
    static-server
    underscore