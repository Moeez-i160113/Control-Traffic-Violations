const Officer = artifacts.require("Officer");

module.exports = function(deployer) {
  deployer.deploy(Officer);
};
