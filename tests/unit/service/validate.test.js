const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const Joi = require("joi");
const sinon = require("sinon");
const { RunSchemas } = require("../../../services/validate");

chai.use(chaiAsPromised);

describe('service/validate', () => {
  beforeEach(sinon.restore);
  const schema = Joi.object();
  
  describe('RunSchemas', () => {
    it('deve ocorrer um erro, caso o joi apresente um erro', () => {
      sinon.stub(schema, "validateAsync").rejects();
      chai.expect(RunSchemas(schema)({})).to.eventually.be.rejected;
    });

    it('deve retornar o objeto resolvido com sucesso', () => {
      sinon.stub(schema, "validateAsync").resolves({});
      chai.expect(RunSchemas(schema)({})).to.eventually.deep.equal({});
    });
  });
});