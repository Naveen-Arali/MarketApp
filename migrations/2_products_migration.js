const Productsale = artifacts.require("Productsale");

module.exports = function(deployer) {
  deployer.deploy(Productsale);
};
