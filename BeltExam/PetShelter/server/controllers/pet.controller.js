const Pet = require("../models/pet.model");

module.exports.helloworld = (req, res) => {
    res.json({ message: "hello Pets-api mongoose"})
}

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            res.json({results: allPets})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.sortPetsByType = (req, res) => {
    Pet.find()
    .sort({"type": "ascending"})
    .then(pets =>{
        console.log(pets)
        res.json({results: pets})
    })
    .catch(err=>{
        console.log(err)
    })

}

module.exports.createNewPet = (req, res) => {
    console.log("got into the create function!!!")

    Pet.create(req.body)
        .then(newPetObj => {
            console.log('I am here');
            res.json({ results: newPetObj});
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOnePet = (req, res) => {
    console.log('trying to find one Pet');
    console.log(req.params.id);
    let idToFind = req.params.id;
    // console.log(id);
    Pet.findOne({_id: idToFind})
        .then(foundPet => {
            res.json({results: foundPet})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.updateExistingPet = (req, res) => {
    console.log('ID to put is  ', req.params.id);
    Pet.findOneAndUpdate(
        
        { _id: req.params.id },
        req.body,
        // new: true -> return the newly updated info
        // run validators -> apply the same validations 
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ results: updatedPet }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletedPet => res.json({ results: deletedPet }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.findRandomPet = (req, res) => {
    Pet.find()
    .then(allPets=> {
        console.log(allPets);
        let lengthOfPets = allPets.length;
        console.log('lengthOfPets is ', lengthOfPets)

        function getRandomInt(max) {
            return Math.floor(Math.random() + max);
        }
        let randomIndex = getRandomInt(lengthOfPets-1);
        console.log('randomIndex is ', randomIndex)
        res.json({ results: allPets[1]});
    })
    .catch(err => {
        res.json({err: err})
    });
}