const express = require("express");

const router = express();
const {registerUser, getLFList, getDepositList, updateBankDeposit, preRegisterUser, getEntrepreneurshipBusiness, checkAnswer, endAuction, getRealEstateMissionDetails, acceptRealEstateSellOfferDetails, acceptTradingBuyOfferDetails, acceptTradingSellOfferDetails, getEntrepreneurshipMissionDetails, acceptEntrepreneurshipBuyOfferDetails, getLastWheelSpinTime} = require("../controller/user");
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
const {getOwnedNFTs} = require("../controller/user");
const {startAuction} = require("../controller/user")
const {getAuctionDetails} = require("../controller/user")
const {placeBid} = require("../controller/user");
const {startSale, cancelSale} = require("../controller/user")
const {postGetInTouchDetails, getGetInTouchDetails} = require("../controller/user")
const {handleStatus, handlePriority, deleteRequest} = require("../controller/user");
const {acceptRealEstateBuyOfferDetails} = require("../controller/user");
const {getTradingMissionDetails} = require("../controller/user");


router.post("/preregistration", preRegisterUser);

router.post("/", registerUser);

router.get('/playerdetail/:playerAccount', getPlayer)

router.post('/saveDetails', saveDetails);

router.get('/getMarketplaceDetails', getMarketplaceDetails);

router.post('/buyFromMarketplace', buyFromMarketplace);

router.get('/getAuctionDetails/:category/:id', getAuctionDetails);

router.post('/startAuction', startAuction);

router.post('/endAuction', endAuction);

router.post('/startSale', startSale);

router.post('/cancelSale', cancelSale);

router.post('/placeBid', placeBid);

router.get('/getOwnedNFTs/:userAccount', getOwnedNFTs); //Change the name from characters to generic - items

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

router.post('/postGetInTouchDetails', postGetInTouchDetails);

router.get('/getGetInTouchDetails', getGetInTouchDetails);

router.post('/changeStatus', handleStatus);

router.post('/changePriority', handlePriority);

router.post('/deleteRequest', deleteRequest);

router.get('/getRealEstateMissionDetails/:userAccount/:countryID/:cityID/:pillarID/:randomMissionNumber', getRealEstateMissionDetails);

router.post('/acceptRealEstateBuyOfferDetails', acceptRealEstateBuyOfferDetails);

router.post('/acceptRealEstateSellOfferDetails', acceptRealEstateSellOfferDetails);

router.get('/getTradingMissionDetails/:userAccount/:countryID/:cityID/:pillarID/:randomMissionNumber', getTradingMissionDetails);

router.post('/acceptTradingBuyOfferDetails', acceptTradingBuyOfferDetails);

router.post('/acceptTradingSellOfferDetails', acceptTradingSellOfferDetails);

router.get('/getEntrepreneurshipMissionDetails/:userAccount/:countryID/:cityID/:pillarID/:randomMissionNumber', getEntrepreneurshipMissionDetails);

router.post('/acceptEntrepreneurshipBuyOfferDetails', acceptEntrepreneurshipBuyOfferDetails);

//Make the 'sell' route of entrepreneurship later in the future.

router.get('/getLastWheelSpinTime/:userAccount', getLastWheelSpinTime);

module.exports = router;