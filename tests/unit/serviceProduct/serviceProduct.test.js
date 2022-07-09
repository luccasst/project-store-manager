const { expect } = require("chai");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");

chai.use(chaiAsPromised);

const modelProduct = require('../../../models/modelProduct');
const controllerProduct = require('../../../controllers/controllerProduct');
const serviceProduct = require('../../../services/serviceProduct');


describe("services/serviceProduct", () => {
  beforeEach(sinon.restore);

  describe("getAll", () => {
    
    it('deve ocorrer um erro, caso serviceProduct dispare um erro', () => {
      sinon.stub(modelProduct, "getAll").rejects();
      chai.expect(serviceProduct.getAll()).to.eventually.be.rejected;
    });

    it('deve retornar o id, caso o modelProduct retorne o id', () => {
      sinon.stub(modelProduct, "getAll").resolves([{}]);
      chai.expect(serviceProduct.getAll()).to.eventually.equal([{}]);
    });
  });

  describe("getById", () => {
    
    it('deve ocorrer um erro, caso modelProduct apresente um erro', () => {
      sinon.stub(modelProduct, "getById").rejects();
      chai.expect(serviceProduct.getById(1)).to.eventually.be.rejected;
    });
    
    it('deve ocorrer um erro, caso o produto não for encontrado', () => {
      sinon.stub(modelProduct, "getById").resolves(false);
      chai.expect(serviceProduct.getById('a')).to.eventually.throw(Error);
    });

    it('deve retornar o objeto, caso o modelProduct.getById retorne', () => {
      sinon.stub(modelProduct, "getById").resolves({});
      chai.expect(serviceProduct.getById(1)).to.eventually.deep.equal({});
    });
  });
});
