var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var UserPass = require('./userPass');
var db = mongojs(UserPass, ['classes']);

// Get All Classes
router.get('/classes', function (req, res, next) {
    db.classes.find(function (err, classes) {
        if (err) {
            res.send(err);
        }
        res.json(classes);
    });
});

// Get Single Class
router.get('/class/:id', function (req, res, next) {
    db.classes.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, characterClass) {
        if (err) {
            res.send(err);
        }
        res.json(characterClass);
    });
});

//Save Class
router.post('/class', function (req, res, next) {
    var characterClass = req.body;
    if (!characterClass.name) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.classes.save(characterClass, function (err, characterClass) {
            if (err) {
                res.send(err);
            }
            res.json(characterClass);
        });
    }
});

// Delete Class
router.delete('/class/:id', function (req, res, next) {
    db.classes.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, characterClass) {
        if (err) {
            res.send(err);
        }
        res.json(characterClass);
    });
});

// Update Class MÅ FIKSES
router.put('/class/:id', function (req, res, next) {
    var characterClass = req.body;

    if (!characterClass.name) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.classes.update({ _id: mongojs.ObjectId(req.params.id) }, {$set: { name: characterClass.name}}, {}, function (err, characterClass) {
            if (err) {
                res.send(err);
            }
            res.json(characterClass);
        });
    }
});

module.exports = router;