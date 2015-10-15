/**
 * SudaderaController
 *
 * @description :: Server-side logic for managing sudaderas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/*
	 * Para obtener los datos visibles en el formulario de pedido de sudadera.
	 */
	 getData: function (req, res) {
	 	var tallas = Sudadera.attributes.tallas.enum;
	 	var colores = Sudadera.attributes.colores.enum;
	 	var disenos = Sudadera.attributes.disenos.enum;
	 }
};

