const Challan = artifacts.require("Challan");

module.exports = function(deployer) {
  deployer.deploy(Challan);
};
