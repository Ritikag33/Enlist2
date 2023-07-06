const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenderSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },

    event_name: {
        type: String,
        required: true
    },
    month:{
        type: String,
        required: true
    },
    phone_no:{
        type: String,
        required: true
    },
    emailID:{
        type: String,
        required: true
    },
    participants:{
        type:Number,
    },
    expectedBudget: {
        type: String,
        required: true
    },
    event_type:{
        type: String,
        required: true
    
    },
    logisticNeed:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    
    },
    zip:{
        type: Number,
    }
},{timestamps:true});

const Tender = mongoose.model('Tender',tenderSchema);
module.exports = Tender;

