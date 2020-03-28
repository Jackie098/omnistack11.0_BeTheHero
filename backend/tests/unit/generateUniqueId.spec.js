const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {  //Nome do teste
  it('should generate an unique ID', () => {  //sobre o teste
    const id = generateUniqueId();
    
    expect(id).toHaveLength(8);  //O que é como será testado
  })
})