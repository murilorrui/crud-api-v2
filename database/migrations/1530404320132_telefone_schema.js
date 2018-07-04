'use strict'

const Schema = use('Schema')

class TelefoneSchema extends Schema {
  up () {
    this.create('telefones', (table) => {
      table.increments()
      table.string('numero')
      table.string('tipoTelefone')
      table.integer('pessoa_id').references('id').inTable('pessoas')
      table.timestamps()
    })
  }

  down () {
    this.drop('telefones')
  }
}

module.exports = TelefoneSchema
