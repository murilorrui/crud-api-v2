'use strict'

const Model = use('Model')


class Pessoa extends Model {
  telefones () {
    return this.hasMany('App/Models/Telefone')
  }
}

module.exports = Pessoa
