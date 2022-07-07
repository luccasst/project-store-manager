const db = require('./db');

const modelProduct = {
  async list() {
    const sqlProducts = 'SELECT * FROM products';
    const [itens] = await db.query(sqlProducts);
    return itens;
  },
  async getById(id) {
    const sql = 'SELECT * FROM products WHERE id = ?';
    const [[item]] = await db.query(sql, [id]);
    console.log(item);
    return item;
  },
};

module.exports = modelProduct;