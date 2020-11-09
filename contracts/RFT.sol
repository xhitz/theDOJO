// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RFT is ERC20 {
    uint256 public icoSharePrice;
    uint256 public icoShareSupply;
    uint256 public icoEnd;

    uint256 public nftId;
    IERC721 public nft;
    IERC20 public dai;

    address public NFTowner;

    constructor(
        string memory _name,
        string memory _symbol,
        address _nftAddress,
        uint256 _nftId,
        uint256 _icoSharePrice,
        uint256 _icoShareSupply,
        address _daiAddress
    ) public ERC20(_name, _symbol) {
        nftId = _nftId;
        nft = IERC721(_nftAddress);
        icoSharePrice = _icoSharePrice;
        icoShareSupply = _icoShareSupply;
        dai = IERC20(_daiAddress);
        NFTowner = msg.sender;
    }

    function startIco() external {
        require(msg.sender == NFTowner, "only owner");
        nft.transferFrom(msg.sender, address(this), nftId);
        icoEnd = block.timestamp + 7 * 86400;
    }

    function buyShare(uint256 shareAmount) external {
        require(icoEnd > 0, "not started");
        require(block.timestamp <= icoEnd, "too late");
        require(totalSupply() + shareAmount <= icoShareSupply, "not enough");
        uint256 daiAmount = shareAmount * icoSharePrice;
        dai.transferFrom(msg.sender, address(this), daiAmount);
        _mint(msg.sender, shareAmount);
    }

    function withdrawICO() external {
        require(msg.sender == NFTowner, "only owner");
        require(block.timestamp > icoEnd, "not over");
        uint256 daiBalance = dai.balanceOf(address(this));
        if (daiBalance > 0) {
            dai.transfer(NFTowner, daiBalance);
            uint256 unsoldShareBalance = icoShareSupply - totalSupply();
            if (unsoldShareBalance > 0) {
                _mint(NFTowner, unsoldShareBalance);
            }
        }
    }
}
