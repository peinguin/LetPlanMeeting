var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , sequelize = var sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: __dirname + '/../db.sqlite'
  })
  , db        = {}
 
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
 
Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;
 
module.exports = exports = db;