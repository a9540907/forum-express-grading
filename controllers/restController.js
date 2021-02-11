const db = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category

const restController = {
  getRestaurants: (req, res) => {
    Restaurant.findAll({ include: Category }).then(restaurants => {
      console.log('--------')
      console.log('restaurants:', restaurants[0])
      console.log('--------')
      const data = restaurants.map(r => ({
        ...r.dataValues,
        description: r.dataValues.description.substring(0, 50),
        categoryName: r.Category.name
      }))
      console.log('data:', data[0])
      console.log('--------')
      return res.render('restaurants', {
        restaurants: data
      })
    })
  }
}

module.exports = restController