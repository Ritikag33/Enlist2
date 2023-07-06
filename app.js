require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tenderRoutes = require('./routes/tenderRoutes')


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB connected");
    app.listen(3000);
}).catch((err) => {
    console.log(err);
});

app.set('view engine','ejs'); //ejs - embedded javascript templates

app.use(express.static('public')); //middleware to serve static CSS files
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(tenderRoutes);


//404 error
app.use((req,res)=>{
    res.status(400).render('404.ejs');
})
