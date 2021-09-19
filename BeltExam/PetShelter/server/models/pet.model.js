const mongoose = require('mongoose');

// Pet table
const PetsSchema = new mongoose.Schema({
    // fields
    name: { 
        type: String,
        required: [true, "Name  is required"],
        minlength: [3, "Name has to be at least 3 characters long"]
    },
    type: { 
        type: String,
        required: [true, "Type  is required"],
        minlength: [3, "Type has to be at least 3 characters long"]
    },
    description: { 
        type: String,
        required: [true, "Description  is required"],
        minlength: [3, "Description has to be at least 3 characters long"]
    },
    skill1: { 
        type: String
    },
    skill2: { 
        type: String
    },
    skill3: { 
        type: String
    }
});

// register the above as a table
const Pet = mongoose.model("Pet", PetsSchema);

// export
module.exports = Pet;

