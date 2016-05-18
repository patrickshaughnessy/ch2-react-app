'use strict';

var mongoose = require('mongoose');

var tenantSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

var Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
