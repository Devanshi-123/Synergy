const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema(
  {
    URL: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },
    category: {
        type: String,
        required:true
    },
    subcategory: {
        type: String,
        required:true
    },
    topic: {
        type: String,
    },
    description: {
        type: String,
    },
    cost: {
        type: String,
        required:true
    },
     type: {
        type: String,
        required:true
    },
    level: {
        type: String,
        required:true
    },
},{
    timestamps:true
}
);

module.exports = mongoose.model("Resource", ResourceSchema);
