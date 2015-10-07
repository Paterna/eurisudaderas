/**
* Sudadera.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	talla: {
  		type: 'string',
  		enum: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
  		required: true
  	},
  	color: {
  		type: 'string',
  		enum: ['Gris-malva', 'Gris-vigoré', 'Marino', 'Marino-rojo', 'Blanco-náutico', 'Blanco-negro',
  			   'Rojo', 'Rojo-blanco', 'Negro-violeta', 'Negro', 'Náutico', 'Náutico-girasol', 'Rosa',
  			   'Celeste', 'Pistacho', 'Malva', 'Naranja', 'Girasol', 'Chocolate', 'Verde botella',
  			   'Billar', 'Verde flúor', 'Fucsia']
 	}
  }
};

