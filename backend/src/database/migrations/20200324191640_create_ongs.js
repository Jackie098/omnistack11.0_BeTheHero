
exports.up = function(knex) {
  return knex.schema.createTable('ongs', (table) => {
    table.string('id').primary(),
    table.string('name').notNullable(),
    table.string('email').notNullable(),
    table.string('whatsapp').notNullable(),
    table.string('city').notNullable(),
    table.string('uf',2).notNullable() 
    //O segundo valor representa a quantidade de caracteres
  });
};

exports.down = function(nameknex) {
  return knex.schema.dropTable('ongs');
};
