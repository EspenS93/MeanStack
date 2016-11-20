var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var UserPass = require('./userPass');
var db = mongojs(UserPass, ['races']);

// Get All Races
router.get('/races', function (req, res, next) {
    db.races.find(function (err, races) {
        if (err) {
            res.send(err);
        }
        res.json(races);
    });
});

// Get Single Race
router.get('/race/:id', function (req, res, next) {
    db.races.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, race) {
        if (err) {
            res.send(err);
        }
        res.json(race);
    });
});

//Save Race
router.post('/race', function (req, res, next) {
    var race = req.body;
    if (!race.name) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.races.save(race, function (err, race) {
            if (err) {
                res.send(err);
            }
            res.json(race);
        });
    }
});

// Delete Race
router.delete('/race/:id', function (req, res, next) {
    db.races.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, race) {
        if (err) {
            res.send(err);
        }
        res.json(race);
    });
});

// Update Race MÅ FIKSES
router.put('/race/:id', function (req, res, next) {
    var race = req.body;
    if (!race.name) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.races.update({ _id: mongojs.ObjectId(req.params.id) }, {$set: { name: race.name}}, {}, function (err, race) {
            if (err) {
                res.send(err);
            }
            res.json(race);
        });
    }
});

module.exports = router;