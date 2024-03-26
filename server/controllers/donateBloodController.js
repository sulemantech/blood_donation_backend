const donateBloodModel = require("../models/donateBlood");

const postDonateBlood = async (req, res) => {
    try {
        const { bloodType, location } = req.body;
        // Validate request data
        if (!bloodType || !location) {
            return res.status(400).json({ error: 'Blood type and location are required fields' });
        }

        // Create donateBloodDetails record
        const donateBloodDetails = await donateBloodModel.create({
            bloodType,
            location
        });

        res.status(201).json(donateBloodDetails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error in postDonateBlood, donateBloodController.js' });
    }
}
module.exports={
    postDonateBlood,
    post:[
        {
            path:"/api/donateBlood",
            method: postDonateBlood
        }
    ]
}

