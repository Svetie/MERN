const Author = require("../models/author.model");

module.exports.helloworld = (req, res) => {
    res.json({ message: "hello Authors-api mongoose"})
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json({results: allAuthors})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createNewAuthor = (req, res) => {
    console.log("got into the create function!!!")

    Author.create(req.body)
        .then(newAuthorObj => {
            console.log('I am here');
            res.json({ results: newAuthorObj});
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOneAuthor = (req, res) => {
    console.log('trying to find one Author');
    console.log(req.params.id);
    let idToFind = req.params.id;
    // console.log(id);
    Author.findOne({_id: idToFind})
        .then(foundAuthor => {
            res.json({results: foundAuthor})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.updateExistingAuthor = (req, res) => {
    console.log('ID to put is  ', req.params.id);
    Author.findOneAndUpdate(
        
        { _id: req.params.id },
        req.body,
        // new: true -> return the newly updated info
        // run validators -> apply the same validations 
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ results: updatedAuthor }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => res.json({ results: deletedAuthor }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.findRandomAuthor = (req, res) => {
    Author.find()
    .then(allAuthors=> {
        console.log(allAuthors);
        let lengthOfAuthors = allAuthors.length;
        console.log('lengthOfAuthors is ', lengthOfAuthors)

        function getRandomInt(max) {
            return Math.floor(Math.random() + max);
        }
        let randomIndex = getRandomInt(lengthOfAuthors-1);
        console.log('randomIndex is ', randomIndex)
        res.json({ results: allAuthors[1]});
    })
    .catch(err => {
        res.json({err: err})
    });
}