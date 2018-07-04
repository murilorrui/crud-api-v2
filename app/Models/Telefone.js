'use strict'

const Model = use('Model')

class Telefone extends Model {
  pessoa () {
    return this.belongsTo('App/Models/Pessoa')
  }
}

module.exports = Telefone
