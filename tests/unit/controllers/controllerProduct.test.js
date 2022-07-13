const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");

chai.use(chaiAsPromised);

const controllerProduct = require('../../../controllers/controllerProduct');
const serviceProduct = require('../../../services/serviceProduct');

describe('controllers/controllerProduct', () => {
  beforeEach(sinon.restore);

  
describe('getAll', () => {
  it('deve ocorrer um erro, caso controllerProduct.getAll dispare um erro', () => {
    sinon.stub(serviceProduct, "getAll").rejects();
    chai.expect(controllerProduct.getAll({}, {})).to.eventually.be.rejected;
  });
  
  it('deve retornar o objeto, caso o controllerProduct.getAll retorne', async () => {
    sinon.stub(serviceProduct, "getAll").resolves([{}]);
    const res = {
      status: sinon.stub().callsFake(() => res),
      json: sinon.stub().returns(),
    }
    await controllerProduct.getAll({}, res);
    chai.expect(res.status.getCall(0).args[0]).to.equal(200);
    chai.expect(res.json.getCall(0).args[0]).to.deep.equal([{}]);
  });
});

describe("getById", () => {
  it('deve ocorrer um erro, caso o controllerProduct dispare um erro', () => {
    sinon.stub(serviceProduct, "getById").rejects();
    chai.expect(controllerProduct.getById({}, {})).to.eventually.be.rejected;
  });

  it('deve retornar o objeto caso o controllerProduct.getById retorne', async () => {
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().callsFake(() => res),
      json: sinon.stub().returns(),
    };
    sinon.stub(serviceProduct, "getById").resolves({});
    await controllerProduct.getById(req, res);
    chai.expect(res.status.getCall(0).args[0]).to.equal(200);
    chai.expect(res.json.getCall(0).args[0]).to.be.deep.equal({});
  });
});
  describe('add', () => {
    it('deve ocorrer um erro, caso o serviceProduct dispare um erro', () => {
      sinon.stub(serviceProduct, "addValidateBody").rejects();
      chai.expect(controllerProduct.add({}, {})).to.eventually.be.rejected;
    });
    it('deve ocorrer um erro, caso o controllerProduct dispare um erro', () => {
      sinon.stub(serviceProduct, "addValidateBody").resolves({});
      sinon.stub(serviceProduct, "add").rejects();
      chai.expect(controllerProduct.add({}, {})).to.eventually.be.rejected;
    });
    
    it('deve retornar o objeto, caso o controllerProduct/add retorne', async () => {
      const item = {
        name: "Martelo de Thor",
        id: 1,
      };
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
      };
      const following = sinon.stub().returns();
      sinon.stub(serviceProduct, "addValidateBody").resolves({ name: "Martelo de Thor" });
      sinon.stub(serviceProduct, "add").resolves(item);
      await controllerProduct.add({}, res, following);
      chai.expect(res.status.getCall(0).args[0]).to.equal(201);
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal(item);
    });

  });
});