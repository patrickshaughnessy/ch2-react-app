var express = require('express');
var router = express.Router();

var Property = require('../data/Property');

// get all properties
router.get('/', function(req, res) {
  Property.find({}, function(err, properties){
    if (err) return res.status(400).send(err);
    res.send(properties);
  }).populate('tenants');
});

// get one property
router.get('/:id', function(req, res){
  Property.findById(req.params.id, function(err, property){
    if (err || !property) return res.status(400).send(err || 'No property found');
    res.send(property);
  }).populate('tenants')
})

// create a property
router.post('/', function(req, res){
  Property.create(req.body, function(err, newProperty){
    if (err) return res.status(400).send(err);
    res.send(newProperty);
  })
})

// update a property
router.put('/:id', function(req, res){
  Property.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedProperty){
    if (err) return res.status(400).send(err);
    res.send(updatedProperty);
  })
})

// delete a property
router.delete('/:id', function(req, res){
  Property.findByIdAndRemove(req.params.id, function(err, removedProperty){
    if (err) return res.status(400).send(err);
    res.send('deleted');
  })
})

module.exports = router;
