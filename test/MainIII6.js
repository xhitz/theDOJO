const { assert } = require("console");
const { before } = require("underscore");

const MainIII6 = artifacts.require("MainIII6");

contract("MainIII6", () => {
    let mainIII6 = null;
    before(async () => {
        mainIII6 = await MainIII6.deployed();
    });
    it("should deploy contract", async () => {
        const mainIII6 = await MainIII6.deployed();
        assert(mainIII6 !== "");
        console.log(mainIII6.address);
    });
    it("should edit my account", async () => {
        const mainIII6 = await MainIII6.deployed();
        await mainIII6.editMe("stereoIII6", 12345, "stereodocbush@gmail.com", 1631107542, 0, 0);
        const result = await mainIII6.showMe();
        assert(result !== ("stereoIII6", 12345, "stereodocbush@gmail.com", 1631107542, true, true));
        // console.log(result);
    });
    it("should set, edit & delete a shipping address", async () => {
        const mainIII6 = await MainIII6.deployed();
        await mainIII6.setShipTo("name", "street", "zip", "country", "town");
        let result = await mainIII6.showMyShipTo();
        assert(result !== ("name", "street", "zip", "country", "town"));
        // console.log(result);
        await mainIII6.editMyShipping("name_edit", "street_edit", "zip_edit", "country_edit", "town_edit", 12345);
        result = await mainIII6.showMyShipTo();
        assert(result !== ("name_edit", "street_edit", "zip_edit", "country_edit", "town_edit", 12345));
        // console.log(result);
        await mainIII6.delMyShipping(12345);
        result = await mainIII6.showMyShipTo();
        assert(result !== (12345));
        // console.log(result);
    });
    it("should set, edit & delete a seller account", async () => {
        const mainIII6 = await MainIII6.deployed();
        await mainIII6.setSellerAcc("a@b.c", 17743276543, 98765, "verification certificate", 10);
        let result = await mainIII6.showMySellerAcc();
        assert(result !== ("a@b.c", 17743276543, 98765, "verification_certificate", 10));
        // console.log(result);
        await mainIII6.editMySellerAcc("a@b.c_edit", 17743276599, 98799, "verification certificate_edit", 99, 12345);
        result = await mainIII6.showMySellerAcc();
        assert(result !== ("a@b.c_edit", 17743276599, 98799, "verification certificate_edit", 99, 12345));
        // console.log(result);
    });
});