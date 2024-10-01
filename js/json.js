const shop = {
	owner: 'Alia',
	address:  {
		street: 'kochu khet er goli',
		city: 'ranbir',
		country: 'bd'
	},
	products: ['laptop', 'mic', 'monitor', 'keyboard'],
	revenue: 450000,
	isOpen: true,
	isNew: false,
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);