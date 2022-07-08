const sinon = require('sinon');
const chai = require('chai');
const chaiPromised = require('chai-as-promised');
const controllerProduct = require('../../../controllers/controllerProduct');
const serviceProduct = require('../../../services/serviceProduct');

chai.use(chaiPromised);

describe('controllers/controllerProduct', () => {
  beforeEach(sinon.restore);
})

describe('getById', () => {
  it('deve ocorrer um erro caso controllerProduct dispare um erro', () => {
    sinon.stub(serviceProduct, "getById").rejects();
    chai.expect(controllerProduct.getById({}, {})).to.eventually.be.rejected;
  });
  
  it('deve retornar o objeto, caso o controllerProduct retorne', async () => {
    sinon.stub(serviceProduct, "getById").resolves([{}]);
    const res = {
      status: sinon.stub().callsFake(() => res),
      json: sinon.stub().returns(),
    }
    await controllerProduct.getById({}, res);
    chai.expect(res.status.getCall(0).args[0]).to.equal(200);
    chai.expect(res.json.getCall(0).args[0]).to.deep.equal([{}]);
  });
});

describe("getById", () => {
  it('deve ocorrer um erro, caso o controllerProduct dispare um erro', () => {
    sinon.stub(serviceProduct, "getById").rejects();
    chai.expect(controllerProduct.getById({}, {})).to.eventually.be.rejected;
  });

  it('deve retornar o objeto caso o controllerProduct retorne', async () => {
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().callsFake(() => res),
      json: sinon.stub().returns(),
    };
    sinon.stub(serviceProduct, "getById").resolves({});
    await controllerProduct.getById(req, res);
    chai.expect(res.status.getCall(0).args[0]).to.equal(200);
    chai.expect(res.json.getCall(0).args[0]).to.deep.equal([{}]);
  });
});