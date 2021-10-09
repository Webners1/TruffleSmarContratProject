const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (deployer) {
  await deployer.deploy(SimpleStorage);
  const simpleStorage = await SimpleStorage.deployed()
  let name = await simpleStorage.name()
  console.log(name)
  await simpleStorage.changeName()
  name = await simpleStorage.name()

  console.log(name)

};
module.exports.tags =['deploy','muzammil']