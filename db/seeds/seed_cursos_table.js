const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('cursos').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('cursos').insert([{
        id: i + 1,
        titulo: casual.words(2),
        descripcion: casual.sentences(3),
        profesor_id: casual.integer(1, 10),
        rating: casual.double(1, 5)
      }])
    })

    return Promise.all(promises)
  })
}
