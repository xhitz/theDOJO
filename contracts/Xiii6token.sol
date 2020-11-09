// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Xiii6Token is ERC20 {
    constructor() ERC20("iii6 Token", "III6_BX"){
    }
    function mint(address to, uint amount) external {
        _mint(to,amount);
    }
}
