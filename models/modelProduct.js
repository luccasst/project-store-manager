const db = require('./db');

const modelProduct = {
  async getAll() {
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
  async add(name) {
    const sql = 'INSERT INTO products (name) VALUES (?)';
    const [{ insertId: id }] = await db.query(sql, [name]);
    return { name, id };
  },
};

module.exports = modelProduct;