const Ninja = require("../models/ninja.model");

module.exports.helloworld = (req, res) => {
    res.json({ message: "hello Ninjas-api mongoose"})
}

module.exports.findAllNinjas = (req, res) => {
    Ninja.find()
        .then(allNinjas => {
            res.json({results: allNinjas})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createNewNinja = (req, res) => {
    console.log("got into the create function!!!")

    Ninja.create(req.body)
        .then(newNinjaObj => {
            console.log('I am here');
            res.json({ results: newNinjaObj});
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOneNinja = (req, res) => {
    console.log('trying to find one Ninja');
    console.log(req.params.id);
    let idToFind = req.params.id;
    // console.log(id);
    Ninja.findOne({_id: idToFind})
        .then(foundNinja => {
            res.json({results: foundNinja})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.updateExistingNinja = (req, res) => {
    console.log('ID to put is  ', req.params.id);
    Ninja.findOneAndUpdate(
        
        { _id: req.params.id },
        req.body,
        // new: true -> return the newly updated info
        // run validators -> apply the same validations 
        { new: true, runValidators: true }
    )
        .then(updatedNinja => res.json({ results: updatedNinja }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.deleteNinja = (req, res) => {
    Ninja.deleteOne({ _id: req.params.id })
        .then(deletedNinja => res.json({ results: deletedNinja }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.findRandomNinja = (req, res) => {
    Ninja.find()
    .then(allNinjas=> {
        console.log(allNinjas);
        let lengthOfNinjas = allNinjas.length;
        console.log('lengthOfNinjas is ', lengthOfNinjas)

        function getRandomInt(max) {
            return Math.floor(Math.random() + max);
        }
        let randomIndex = getRandomInt(lengthOfNinjas-1);
        console.log('randomIndex is ', randomIndex)
        res.json({ results: allNinjas[1]});
    })
    .catch(err => {
        res.json({err: err})
    });
}