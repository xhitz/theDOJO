// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

contract MainIII6 {
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
    //////////////////////////////////////////
    //                                      //
    //          VARS                        //
    //                                      //
    //////////////////////////////////////////
    bytes private name;
    uint256 private uc;
    uint256 private ac;
    //////////////////////////////////////////
    //                                      //
    //          STRUCTS                     //
    //                                      //
    //////////////////////////////////////////
    struct User {
        uint256 id;
        address adr;
        string name;
        string pin;
        string email;
        string mobile;
        uint256 role;
    }
    struct ShipTo {
        string country;
        string town;
        string street;
        string zip;
        string name;
    }
    struct Seller {
        uint256 id;
        address adr;
        string email;
        string mobile;
        string brightId;
        string veriCert;
        uint256 colletteral;
    }
    //////////////////////////////////////////
    //                                      //
    //          MAPPINGS                    //
    //                                      //
    //////////////////////////////////////////
    mapping(address => uint256) private userCount;
    mapping(address => uint256) private adminCount;
    mapping(address => bool) private isUser;
    mapping(address => bool) private isAdmin;
    mapping(uint256 => ShipTo) private shipping;
    mapping(uint256 => Seller) private seller;
    //////////////////////////////////////////
    //                                      //
    //          ARRAYS                      //
    //                                      //
    //////////////////////////////////////////
    address[9] private adm;
    uint256[27] private birth;
    User[] private users;
    //////////////////////////////////////////
    //                                      //
    //          MODIFIERS                   //
    //                                      //
    //////////////////////////////////////////
    modifier onlyAdm() {
        require(
            users[userCount[msg.sender]].adr == adm[adminCount[msg.sender]]
        );
        require(users[userCount[msg.sender]].role == 99);
        require(
            users[userCount[msg.sender]].id == birth[adminCount[msg.sender]]
        );
        require(isAdmin[msg.sender]);
        _;
    }
    modifier onlyAdv() {
        require(users[userCount[msg.sender]].role <= 22);
        _;
    }
    modifier onlyUser() {
        require(isUser[msg.sender]);
        _;
    }
    modifier readyDel() {
        require(users[userCount[msg.sender]].role == 0);
        _;
    }

    //////////////////////////////////////////
    //                                      //
    //          EVENTS                      //
    //                                      //
    //////////////////////////////////////////
    //////////////////////////////////////////
    //                                      //
    //          FUNCTIONS                   //
    //                                      //
    //////////////////////////////////////////

    //*         MISC                       *//
    function strCmp(string memory a, string memory b)
        private
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    function showUC(address adr) external returns (uint256) {
        return userCount[adr];
    }

    //*         CREATE                     *//
    function createAcc(
        string calldata _name,
        string calldata _pin,
        string calldata _email,
        string calldata _mobile,
        bool _adv,
        bool _pub
    ) external returns (bool) {
        uint256 rl;
        if (_pub) rl += 11;
        if (_adv) rl += 22;
        users.push(
            User(block.timestamp, msg.sender, _name, _pin, _email, _mobile, rl)
        );
        userCount[msg.sender] = uc;
        isUser[msg.sender] = true;
        uc++;
        return true;
    }

    function setShipTo(
        string calldata _name,
        string calldata _str,
        string calldata _zip,
        string calldata _country,
        string calldata _town
    ) external onlyUser() returns (bool) {
        uint256 id = userCount[msg.sender];
        uint256 uId = users[id].id;
        ShipTo memory shipMe = ShipTo(_country, _town, _str, _zip, _name);
        shipping[uId] = shipMe;
        return true;
    }

    // create seller account
    function setSellerAcc(
        string calldata _email,
        string calldata _mobile,
        string calldata _bright,
        string calldata _veri,
        uint256 _col
    ) external onlyUser() returns (bool) {
        Seller memory mySellerAcc = Seller(
            users[userCount[msg.sender]].id,
            msg.sender,
            _email,
            _mobile,
            _bright,
            _veri,
            _col
        );
        seller[users[userCount[msg.sender]].id] = mySellerAcc;
        return true;
    }

    //*         READ                       *//

    // show user role
    function showRole(address _adr) private view returns (string memory) {
        uint256 id = userCount[_adr];
        string memory rl;
        if (users[id].role == 0) rl = "listed";
        else if (users[id].role == 1) rl = "client";
        else if (users[id].role == 11) rl = "publisher";
        else if (users[id].role == 22) rl = "advertiser";
        else if (users[id].role == 33) rl = "manager";
        else if (users[id].role == 77) rl = "surv";
        else if (users[id].role == 88) rl = "mod";
        else if (users[id].role == 99) rl = "aaadmin";
        else rl = "unknown";
        return rl;
    }

    function amIuser(address adr) external view returns (bool) {
        return isUser[adr];
    }

    function amIadmin() external view returns (bool) {
        return isAdmin[msg.sender];
    }

    function amIcontractOwner() external view returns (bool) {
        return isUser[msg.sender];
    }

    // show public user info by msg.sender
    function showMe()
        external
        view
        onlyUser()
        returns (
            string memory,
            string memory,
            address,
            string memory,
            uint256,
            string memory
        )
    {
        uint256 id = userCount[msg.sender];
        return (
            users[id].name,
            users[id].email,
            msg.sender,
            showRole(msg.sender),
            users[id].role,
            users[id].mobile
        );
    }

    function showNow(address adr)
        external
        view
        onlyUser()
        returns (
            string memory,
            string memory,
            address,
            string memory,
            uint256,
            string memory
        )
    {
        uint256 id = userCount[adr];
        return (
            users[id].name,
            users[id].email,
            msg.sender,
            showRole(msg.sender),
            users[id].role,
            users[id].mobile
        );
    }

    // show shipping Data
    function showMyShipTo()
        external
        view
        onlyUser()
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        uint256 id = userCount[msg.sender];
        uint256 uId = users[id].id;
        return (
            shipping[uId].name,
            shipping[uId].country,
            shipping[uId].town,
            shipping[uId].street,
            shipping[uId].zip
        );
    }

    // show seller account data
    function showMySellerAcc()
        external
        view
        onlyUser()
        returns (
            string memory,
            string memory,
            address,
            string memory,
            uint256,
            uint256
        )
    {
        uint256 id = users[userCount[msg.sender]].id;
        return (
            seller[id].veriCert,
            seller[id].email,
            seller[id].adr,
            seller[id].brightId,
            seller[id].colletteral,
            seller[id].id
        );
    }

    //*         UPDATE                     *//
    // edit user accounts
    function editMe(
        string calldata _name,
        string calldata _pin,
        string calldata _email,
        string calldata _mobile,
        bool _adv,
        bool _pub
    ) external onlyUser() returns (bool) {
        uint256 id = userCount[msg.sender];
        require(strCmp(_pin, users[id].pin));
        if (!strCmp(_name, "")) users[id].name = _name;
        if (!strCmp(_pin, users[id].pin)) users[id].pin = _pin;
        if (!strCmp(_email, "")) users[id].email = _email;
        if (strCmp(_mobile, "0")) users[id].mobile = _mobile;
        uint256 rl = 0;
        if (_pub) rl += 11;
        if (_adv) rl += 22;
        if (users[id].role != 99) users[id].role = rl;
        return true;
    }

    // edit seller accounts
    function editMySellerAcc(
        string calldata _email,
        string calldata _mobile,
        string calldata _bright,
        string calldata _veri,
        uint256 _col,
        string calldata _pin
    ) external onlyUser() returns (bool) {
        uint256 id = userCount[msg.sender];
        uint256 uId = users[id].id;
        require(strCmp(_pin, users[id].pin));
        if (!strCmp(_email, "")) seller[uId].email = _email;
        if (!strCmp(_mobile, seller[uId].mobile)) seller[uId].mobile = _mobile;
        if (!strCmp(_bright, seller[uId].brightId))
            seller[uId].brightId = _bright;
        if (!strCmp(_veri, "")) seller[uId].veriCert = _veri;
        if (_col != seller[uId].colletteral) seller[uId].colletteral = _col;
        return true;
    }

    // edit shippng data
    function editMyShipping(
        string calldata _name,
        string calldata _str,
        string calldata _zip,
        string calldata _country,
        string calldata _town,
        string calldata _pin
    ) external onlyUser() returns (bool) {
        uint256 id = userCount[msg.sender];
        uint256 uId = users[id].id;
        require(strCmp(_pin, users[id].pin));
        if (!strCmp(_name, "")) shipping[uId].name = _name;
        if (!strCmp(_str, "")) shipping[uId].street = _str;
        if (!strCmp(_zip, "")) shipping[uId].zip = _zip;
        if (!strCmp(_country, "")) shipping[uId].country = _country;
        if (!strCmp(_town, "")) shipping[uId].town = _town;
        return true;
    }

    //*         DELETE                    *//
    function delMe(string calldata _pin)
        external
        onlyUser()
        readyDel()
        returns (bool)
    {
        uint256 id = userCount[msg.sender];
        require(strCmp(_pin, users[id].pin));
        users[id].name = "";
        users[id].pin = "";
        users[id].email = "";
        users[id].mobile = "";
        users[id].role = 0;
        return true;
    }

    // delete seller data
    function delMySellerData(string calldata _pin)
        external
        onlyAdv()
        returns (bool)
    {
        uint256 id = userCount[msg.sender];
        uint256 uId = users[id].id;
        require(strCmp(_pin, users[id].pin));
        Seller memory mySellerAcc = Seller(0, msg.sender, "", "", "", "", 0);
        seller[uId] = mySellerAcc;
        users[id].role -= 22;
        return true;
    }

    // delete shipping Data
    function delMyShipping(string calldata _pin)
        external
        onlyUser()
        returns (bool)
    {
        uint256 id = userCount[msg.sender];
        uint256 uId = users[id].id;
        require(strCmp(_pin, users[id].pin));
        ShipTo memory shipMe = ShipTo("", "", "", "", "");
        shipping[uId] = shipMe;
        users[id].role -= 22;
        return true;
    }

    //////////////////////////////////////////
    //                                      //
    //          CONSTRUCTOR                 //
    //                                      //
    //////////////////////////////////////////
    constructor() public {
        birth[ac] = block.timestamp;
        users.push(
            User(
                birth[ac],
                msg.sender,
                "admin",
                "pincode",
                "e@g.c",
                "1776543211",
                99
            )
        );
        userCount[msg.sender] = uc;
        adminCount[msg.sender];
        isAdmin[msg.sender] = true;
        isUser[msg.sender] = true;
        adm[ac] = (msg.sender);
        ac++;
        uc++;
    }
}
