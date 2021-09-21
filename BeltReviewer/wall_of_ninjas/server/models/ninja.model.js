const mongoose = require('mongoose');

const NinjasSchema = new mongoose.Schema({
    // fields
    name: { 
        type: String,
        required: [true, "Name  is required"],
        minlength: [2, "Name min 5 characters"]
    },
    numProjects: {
        type: Number,
        required: [true, "Number of projects is required"]
    },
    graduationDate: {
        type: Date,
        required: [true, "Grad date is required"]
    },
    isVeteran: {
        type: Boolean
    },
    profilePicUrl: {
        type: String,
        required: [true, "Required link"]
    }
});

// register the above as a table
const Ninja = mongoose.model("Ninja", NinjasSchema);

// export
module.exports = Ninja;

