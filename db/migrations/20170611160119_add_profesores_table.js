exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('profesores', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('nacionalidad')
      table.string('genero')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('profesores')
  ])
)
