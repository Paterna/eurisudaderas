/**
* Pedido.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	serie: {
  		type: 'float',
  		required: true
  	},
  	cliente: {
  		nombre: {
  			type: 'string',
  			required: true
  		},
  		apellidos: {
  			type: 'string',
  			required: true
  		},
  		email: {
  			type: 'string',
  			required: true
  		}
  	},
  	sudadera: {
  		model: sudadera,
  		required: true
  	}
  }
};