'use strict'

const Schema = use('Schema')

class PessoaSchema extends Schema {
  up () {
    this.create('pessoas', (table) => {
      table.increments()
      table.string('nome')
      table.string('sexo')
      table.string('cpf')
      table.string('rg')
      table.string('reservista')
      table.string('dataNascimento')
      table.string('dataCriacao')
      table.string('idade')
      table.timestamps()
    })
  }

  down () {
    this.drop('pessoas')
  }
}

module.exports = PessoaSchema
