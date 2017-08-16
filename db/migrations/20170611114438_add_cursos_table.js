exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('cursos', (table) => {
      table.increments('id').primary().unsigned()
      table.string('titulo')
      table.string('descripcion')
      table.integer('profesor_id').unsigned()
      table.string('genero')
      table.double('rating').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('cursos')
  ])
)
