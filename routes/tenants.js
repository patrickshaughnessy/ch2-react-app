var express = require('express');
var router = express.Router();

var Tenant = require('../data/Tenant');

// get all tenants
router.get('/', function(req, res) {
  Tenant.find({}, function(err, tenants){
    if (err) return res.status(400).send(err);
    res.send(tenants);
  })
});

// get one tenant
router.get('/:id', function(req, res){
  Tenant.findById(req.params.id, function(err, tenant){
    if (err || !tenant) return res.status(400).send(err || 'No tenant found');
    res.send(tenant);
  })
})

// create a tenant
router.post('/', function(req, res){
  Tenant.create(req.body, function(err, newTenant){
    if (err) return res.status(400).send(err);
    res.send(newTenant);
  })
})

// update a tenant
router.put('/:id', function(req, res){
  Tenant.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedTenant){
    if (err) return res.status(400).send(err);
    res.send(updatedTenant);
  })
})

// delete a tenant
router.delete('/:id', function(req, res){
  Tenant.findByIdAndRemove(req.params.id, function(err, removedTenant){
    if (err) return res.status(400).send(err);
    res.send('deleted', removedTenant);
  })
})

module.exports = router;
