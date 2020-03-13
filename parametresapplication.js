const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schemaParametresApplication = mongoose.Schema({
      information : String ,
  
});

const ParametresApplication = mongoose.model("parametresapplication", schemaParametresApplication);

const schema = Joi.object({
    information : Joi.string().min(3).max(255).required(),
    
});

module.exports.schema = schema;
module.exports.ParametresApplication = ParametresApplication;