const Joke = require("../models/joke.model");

module.exports.helloworld = (req, res) => {
    res.json({ message: "hello Joke-api mongoose"})
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            res.json({results: allJokes})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createNewJoke = (req, res) => {
    console.log("got into the create function!!!")

    Joke.create(req.body)
        .then(newJokeObj => {
            console.log('I am here');
            res.json({ results: newJokeObj});
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOneJoke = (req, res) => {
    console.log('trying to find one Joke');
    console.log(req.params.id);
    let idToFind = req.params.id;
    // console.log(id);
    Joke.findOne({_id: idToFind})
        .then(foundJoke => {
            res.json({results: foundJoke})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.updateExistingJoke = (req, res) => {
    console.log('ID to put is  ', req.params.id);
    Joke.findOneAndUpdate(
        
        { _id: req.params.id },
        req.body,
        // new: true -> return the newly updated info
        // run validators -> apply the same validations 
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ results: updatedJoke }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deletedJoke => res.json({ results: deletedJoke }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.findRandomJoke = (req, res) => {
    Joke.find()
    .then(allJokes=> {
        console.log(allJokes);
        let lengthOfJokes = allJokes.length;
        console.log('lengthOfJokes is ', lengthOfJokes)

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let randomIndex = getRandomInt(lengthOfJokes);
        console.log('randomIndex is ', randomIndex)
        res.json({ results: allJokes[randomIndex]});
    })
    .catch(err => {
        res.json({err: err})
    });
}