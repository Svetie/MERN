const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    // fields
    setup: { 
        type: String,
        requred: [true, "Setup  is required"],
        minlength: [10, "Setup should have min 10 characters"]
    },
    punchline: {
        type: String,
        minlength: [3, "Punchline min 3 characters"],
        required: [true, "Punchline is required"]
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
});

// register the above as a table
const Joke = mongoose.model("Joke", JokesSchema);

// export
module.exports = Joke;