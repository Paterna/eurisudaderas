/**
 * PedidoController
 *
 * @description :: Server-side logic for managing pedidoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/*
	 * Guarda un pedido en la base de datos.
	 */
	order: function (req, res) {

		var serie = 1; // TODO: Cambiar serie desde panel admin
		var nombre = req.body.nombre;
		var email = req.body.email;
		var talla = req.body.talla;
		var color = req.body.color;
		var diseno = req.body.diseno;

		Sudadera.create({
			talla: talla,
			color: color,
			diseno: diseno
		})
		.then(function (sudadera) {
			console.log(sudadera);
			var order = Pedido.create({
				serie: serie,
				nombre: nombre,
				email: email,
				sudadera: sudadera.id
			})
			return order;
		})
		.then(function (order) {
			console.log(order);
			res.api_ok(order);
		})
		.catch(res.api_error)
	}
};

