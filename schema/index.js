const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Comentario = require('./Comentario')
const Curso = require('./Curso')

const rootTypes = `
  union ResultadoBusqueda = Profesor | Curso

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
    buscar(query: String): [ResultadoBusqueda]
  }

  input NuevoProfesor {
    nombre: String!
    genero: Genero!
    nacionalidad: String!
  }

  input ProfesorEditable {
    nombre: String
    genero: Genero
    nacionalidad: String
  }

  type Mutation {
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorDelete(profesorId: Int): Profesor
    profesorEdit(profesorId: Int, profesor: ProfesorEditable): Profesor
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootTypes, Profesor, Comentario, Curso],
  resolvers
})

module.exports = schema
