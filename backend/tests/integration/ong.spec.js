const request = require('supertest');  //Usado para fazer chamadas à API do backend
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {  //Antes de cada teste...
    await connection.migrate.rollback();  //Apaga os dados que ja tem no bd para não sobrecarregar o msm
    await connection.migrate.latest();  //Executar as migrates no database
  });

  afterAll(async () => {  //Dps de todos os testes...
    await connection.destroy();   //FEcha a conexão com o database
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD2",
        email: "contato@contato.com",
        whatsapp: "47000000000",
        city: "Teresina",
        uf: "PI"
      });

      expect(response.body).toHaveProperty('id'); //espera que o corpo da resposta contenha ma propriedade chamada 'id'
      expect(response.body.id).toHaveLength(8); //espera que no campo 'id' tenha 8 caracteres
  });
});