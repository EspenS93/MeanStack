var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var UserPass = require('./userPass');
var db = mongojs(UserPass, ['characters']);

// Get All Characters
router.get('/characters', function (req, res, next) {
    db.characters.find(function (err, characters) {
        if (err) {
            res.send(err);
        }
        res.json(characters);
    });
});

//Query for character
router.get('/characters/:name', function (req, res, next) {
    db.characters.find({ name: { $regex: req.params.name, $options: 'i' } }, function(err,characters) {
        console.log("derp");
        if (err) {
            res.send(err);
        }
        res.json(characters);
    });
});


// Get Single Character
router.get('/character/:id', function (req, res, next) {
    db.characters.findOne({ _id: mongojs.ObjectId(req.params.id)}, function (err, character) {
        if (err) {
            res.send(err);
        }
        res.json(character);
    });
});

//Save Character
router.post('/character', function (req, res, next) {
    var character = req.body;
    if (!character.name) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.characters.save(character, function (err, character) {
            if (err) {
                res.send(err);
            }
            res.json(character);
        });
    }
});

// Delete Character
router.delete('/character/:id', function (req, res, next) {
    db.characters.remove({ _id: mongojs.ObjectId(req.params.id)}, function (err, character) {
        if (err) {
            res.send(err);
        }
        res.json(character);
    });
});

// Update Character
router.put('/character/:id', function (req, res, next) {
    var character = req.body;
    if (!character.name) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.characters.update({ _id: mongojs.ObjectId(req.params.id) }, {$set: { name: character.name}}, {}, function (err, character) {
            if (err) {
                res.send(err);
            }
            res.json(character);
        });
    }
});

module.exports = router;