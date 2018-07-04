'use strict'

const Pessoa = use('App/Models/Pessoa')

class PessoasController {
  async index ({response}) {
    let pessoas = await Pessoa.all()

    return response.json(pessoas)
  }

  async show ({params, response}) {
    const pessoa = await Pessoa.findOrFail(params.id)
    const telefones = await pessoa.telefones().fetch()
    pessoa.telefones = telefones
    return response.json(pessoa)
  }

  async store ({ request, response }) {
    const pessoa = await this._persist(new Pessoa(), request)
    pessoa.telefones()
      .createMany(request.input('telefones'))
    return response.status(201).json(pessoa)
  }

  async update ({params, request, response}) {
    const pessoa = this._persist(await Pessoa.findOrFail(params.id), request)

    return response.status(200).json(pessoa)
  }

  async _persist(pessoa, request) {
    pessoa.nome = request.input('nome')
    pessoa.sexo = request.input('sexo')
    pessoa.cpf = request.input('cpf')
    pessoa.rg = request.input('rg')
    pessoa.reservista = request.input('reservista')
    pessoa.dataNascimento = request.input('dataNascimento')
    pessoa.dataCriacao = request.input('dataCriacao')
    pessoa.idade = request.input('idade')

    await pessoa.save()

    return pessoa;
  }

  async destroy ({params, response}) {
    const pessoa = await Pessoa.findOrFail(params.id)

    await pessoa.delete()

    return response.status(204).json(null)
  }
}

module.exports = PessoasController
