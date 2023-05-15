const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://sooryajithbaiju007:soorya700@cluster0.sihyqkt.mongodb.net/?retryWrites=true&w=majority")

// schema
let Schema = mongoose.Schema;

const studentSchema =  new Schema({
    sname:String,
    sgrade:Number
});

var studemodel = mongoose.model("students",studentSchema);

module.exports=studemodel;
