const allProducts = [
	{
		"id": 1,
		"name": "Martelo de Thor"
	},
	{
		"id": 3,
		"name": "Escudo do Capitão América"
	},
	{
		"id": 4,
		"name": "capacete"
	},
	{
		"id": 5,
		"name": "capacete"
	},
	{
		"id": 6,
		"name": "pegueioesquema"
	}
]

const getById = { code: 200, product: [{ id: 1, name: 'Martelo de Thor' }] };

const getByIdError = {
  code: 404,
  message: 'Product not found'
};
''
const registerMock = {
  id: undefined,
  name: "Escudo do Capitão América"
};

const updateProduct = {
  id: 4,
  name: 'Martelo'
}

module.exports = {
  allProducts,
  getById,
  getByIdError,
  registerMock,
  updateProduct,
}