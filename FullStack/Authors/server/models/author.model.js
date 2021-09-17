const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    // fields
    name: { 
        type: String,
        required: [true, "Name  is required"],
        minlength: [3, "Name has to be at least 3 characters long!"]
    }

});

// register the above as a table
const Author = mongoose.model("Author", AuthorsSchema);

// export
module.exports = Author;

