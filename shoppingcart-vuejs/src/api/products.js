
const products = [
   {'id': 1, 'title': 'cup-01', 'price': 9.00, 'inventory': 2, 'img': '../static/img/cup.jpg'},
   {'id': 2, 'title': 'cup-02', 'price': 15.00, 'inventory': 5, 'img': '../static/img/animal-cup.jpg'},
   {'id': 3, 'title': 'dish-01', 'price': 20.00, 'inventory': 10, 'img': '../static/img/dish.jpg'},
   {'id': 4, 'title': 'dish-02', 'price': 25.00, 'inventory': 10, 'img': '../static/img/dish-02.jpg'},
   {'id': 5, 'title': 'bottle', 'price': 18.00, 'inventory': 2, 'img': '../static/img/bottle.jpg'}
]

export default {
  // expose the products API instead the products variable
  getAllProducts: () => products
}
