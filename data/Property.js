'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema

var propertySchema = new Schema({
  address: String,
  tenants: [{ type: Schema.Types.ObjectId, ref: 'Tenant' }],
  rent: Number,
  utilities: Number
});

var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
