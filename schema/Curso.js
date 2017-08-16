module.exports = `
  # Un curso en la plataforma
  type Curso {
    id: ID!
    titulo: String!
    descripcion: String!
    profesor: Profesor
    comentarios: [Comentario]
    rating: Int
  }
`
