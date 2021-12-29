require('dotenv').config();

const s0xiety = artifacts.require("s0xiety");
// const RFT = artifacts.require("RFT");
// const __RPLC__ = artifacts.require("__RPLC__");

module.exports = function (deployer) {
  deployer.deploy(s0xiety, process.env.ADMIN);
  // deployer.deploy(RFT);
  // deployer.deploy(__RPLC__);
};

