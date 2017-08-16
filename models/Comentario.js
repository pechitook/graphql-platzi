const { Model } = require('objection')
const path = require('path')

class Comentario extends Model {
  static get tableName () {
    return 'comentarios'
  }

  static get relationMappings () {
    return {
      curso: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Curso'),
        join: {
          from: 'comentarios.curso_id',
          to: 'cursos.id'
        }
      }
    }
  }
}

module.exports = Comentario
