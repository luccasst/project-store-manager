const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");

chai.use(chaiAsPromised);

const modelProduct = require('../../../models/modelProduct');
const db = require('../../../models/db');
const serviceProduct = require("../../../services/serviceProduct");

describe('models/modelProduct', () => {
  describe('getAll', () => {
    beforeEach(sinon.restore);
    it('deve disparar um erro, caso db.query dispare um erro', () => {
      sinon.stub(db, 'query').rejects();
      chai.expect(modelProduct.getAll()).to.eventually.be.rejected;
    });
    it('deve retornar nada, caso db.query retorne uma lista vazia', () => {
      sinon.stub(db, 'query').resolves([[]]);
      chai.expect(modelProduct.getAll()).to.eventually.be.undefined;
    });
    it('deve retornar uma lista caso d.query retorne com sucesso', () => {
      sinon.stub(db, 'query').resolves([[{}]]);
      chai.expect(modelProduct.getAll()).to.eventually.deep.equal({});
    });
  });
  describe('getById', () => {
    beforeEach(sinon.restore);
    it('deve ocorrer um erro, caso db.query dispare um erro', () => {
      sinon.stub(db, 'query').rejects();
      chai.expect(modelProduct.getById(1)).to.eventually.be.rejected;
    });
    it('deve retornar nada, caso db.query retorne nada', () => {
      sinon.stub(db, 'query').resolves([[]]);
      chai.expect(modelProduct.getById(1)).to.eventually.be.undefined;
    });
    it('deve retornar um elemento, caso db.query retorne com sucesso', () => {
      sinon.stub(db, 'query').resolves([{}]);
      chai.expect(modelProduct.getById(1)).to.eventually.deep.equal({});
    });
  });
  describe('add', () => {
    beforeEach(sinon.restore);
    it('deve ocorrer um erro, caso db.query apresente um erro', () => {
      sinon.stub(db, "query").rejects();
      chai.expect(modelProduct.add(1)).to.eventually.be.rejected;
    });
    it('deve retornar nada, caso o db.query retorne uma lista vazia', () => {
      sinon.stub(db, "query").resolves([[]]);
      chai.expect(modelProduct.add(1)).to.eventually.be.undefined;
    });
    it('deve retornar um elemento, caso o db.query realmente retorne', () => {
      const item = {
        name: "Martelo de Thor",
        id: 1,
      };
      sinon.stub(db, "query").resolves(item);
      chai.expect(modelProduct.add({ name: "Martelo de Thor" }))
        .to.eventually.deep.equal(item);
    });
  });
});