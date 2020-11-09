const { Contract } = require("web3-eth-contract");

const RFT = artifacts.require("RFT.sol");
const Xiii6token = artifacts.require("Xiii6token.sol");
const Xiii6asset = artifacts.require("Xiii6asset.sol");
const toDAI = web3.utils.toWei("25000");

Contract("RFT", async addresses => {
    const [admin, buyer1, buyer2, buyer3, buyer4, _] = addresses;

    it("should work", async () => {
        const iii6token = await Xiii6token.new();
        const iii6asset = await Xiii6asset.new("III6 Asset Holding", "III6_AZ");
        await iii6asset.mint(admin, 1);
        await Promise.all([
            iii6token.mint(buyer1, toDAI),
            iii6token.mint(buyer2, toDAI),
            iii6token.mint(buyer3, toDAI),
            iii6token.mint(buyer4, toDAI),
        ]);
        const rft = await RFT.new(
            "III6 Asset Holding",
            "III6_AZ",
            iii6asset.address,
            1,
            1,
            web3.utils.toWei(100000),
            iii6token.address
        );
        await iii6asset.approve(rft.address, 1);
        await iii6asset.startIco();
    });
});