const express = require('express');
const router = express.Router();
const donateBloodController = require('../controllers/donateBloodController')


router.post('/api/donateBlood',donateBloodController.postDonateBlood)

module.exports=router