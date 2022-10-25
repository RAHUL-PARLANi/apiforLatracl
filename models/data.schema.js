const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const products = new Schema({
   driverName:{type: String, required:false ,default:"N/A"},
   numberPlate:{type: String, required:false ,default:"N/A"},
   checkInTime:{type:String,required:false,default:"N/A"},
   checkOutTime:{type:String,required:false,default:"N/A"},
  });

const bgschema = mongoose.model('DataSchema', products);
module.exports = bgschema;