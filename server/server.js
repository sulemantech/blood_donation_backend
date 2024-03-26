const express=require('express');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const {userRoute,donateBloodRoute,createRequestRoute,ratingRoute}=require('./routes/index');
const sequelize = require('./config/config');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5001;
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send("getting ")
})

sequelize.sync({ force: false }) // This will drop the existing tables and recreate them
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('An error occurred while synchronizing the database:', err);
  });


//signin route
app.use('/', userRoute)

//donateBloodRoute
app.use('/', donateBloodRoute)

//createRequestRoute
app.use('/', createRequestRoute)

//ratingRoute
app.use('/', ratingRoute)


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });




