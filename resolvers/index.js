const Curso = require('../models/Curso')
const Profesor = require('../models/Profesor')

module.exports = {
  Query: {
    cursos: () => Curso.query().eager('[profesor, comentarios]'),
    profesores: () => Profesor.query().eager('cursos'),
    curso: (rootValue, { id }) => Curso.query().eager('[profesor, comentarios]').findById(id),
    profesor: (rootValue, { id }) => Profesor.query().eager('cursos').findById(id),
    buscar: (rootValue, params) => {
      return [
        Curso.query().findById(3),
        Profesor.query().findById(1)
      ]
    }
  },
  Mutation: {
    profesorAdd: (_, { profesor }) => {
      return Profesor
        .query()
        .insert(profesor)
    },
    profesorDelete: (_, { profesorId }) => {
      return Profesor.query().findById(profesorId).then(profesor => {
        return Profesor.query().deleteById(profesorId).then(() => profesor)
      })
    },
    profesorEdit: (_, { profesorId, profesor }) => {
      return Profesor
        .query()
        .patchAndFetchById(profesorId, profesor)
    }
  },
  ResultadoBusqueda: {
    __resolveType: (obj) => {
      if (obj.nombre) return 'Profesor'
      return 'Curso'
    }
  }
}
