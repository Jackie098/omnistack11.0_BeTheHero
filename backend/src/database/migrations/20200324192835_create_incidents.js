
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments(); //id

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable(); //fk
    
    table.foreign('ong_id').references('id').inTable('ong');
    //constraint to fk
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
