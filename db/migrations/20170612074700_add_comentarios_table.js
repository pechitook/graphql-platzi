exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('comentarios', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('cuerpo')
      table.integer('curso_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('comentarios')
  ])
)
