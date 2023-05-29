const express = require("express");

const router = express();
const {registerUser, getLFList, getDepositList, updateBankDeposit, preRegisterUser, getEntrepreneurshipBusiness, checkAnswer} = require("../controller/user");
const {getPlayer} = require("../controller/user");
const {saveDetails} = require("../controller/user");
const {getMarketplaceDetails} = require("../controller/user");
const {getHouseList} = require("../controller/user");
const {updateHouseDetails} = require("../controller/user")
const {getEnergyList} = require("../controller/user");
const {updateEnergyDetails} = require("../controller/user");
const {updateLFDetails} = require("../controller/user");
const {getLoanList} = require("../controller/user");
const {updateBankLoan} = require("../controller/user");
const {buyFromMarketplace} = require("../controller/user");
const {getOwnedCharacters} = require("../controller/user");

router.post("/preregistration", preRegisterUser);

router.post("/", registerUser);

router.get('/playerdetail/:playerAccount', getPlayer)

router.post('/saveDetails', saveDetails);

router.get('/getMarketplaceDetails', getMarketplaceDetails);

router.post('/buyFromMarketplace', buyFromMarketplace);

router.get('/getOwnedCharacters/:userAccount', getOwnedCharacters); //Change the name from characters to generic - items

router.get('/getHouseList', getHouseList);

router.post('/updateHouseDetails', updateHouseDetails);

router.get('/getEnergyList', getEnergyList);

router.post('/updateEnergyDetails', updateEnergyDetails);

router.get('/getLFList', getLFList);

router.post('/updateLFDetails', updateLFDetails);

router.get('/getLoanList', getLoanList);

router.post('/updateBankLoan', updateBankLoan);

router.get('/getDepositList', getDepositList);

router.post('/updateBankDeposit', updateBankDeposit);

router.get('/getEntrepreneurshipBusiness/:level', getEntrepreneurshipBusiness);

router.get('/checkAnswer/:level/:selectedAnswerIndex/:playerAnswer', checkAnswer);

module.exports = router;