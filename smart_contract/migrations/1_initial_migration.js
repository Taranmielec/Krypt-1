const Migrations = artifacts.require("Migrations");
const Transactions = artifacts.require("Transactions.sol")

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Transactions);
};
