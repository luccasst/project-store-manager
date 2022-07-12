const db = require('./db');

const modelSales = {

  async getAll() {
    const sqlAll = `
    SELECT sale_id AS saleId, date, product_id AS productId, quantity FROM StoreManager.sales
    INNER JOIN sales_products ON sales.id = sales_products.sale_id
    ORDER BY sales.id, sales_products.product_id;`;
    const [items] = await db.query(sqlAll);
    return items;
  },

  async getById(id) {
    const sqlId = `SELECT date,
    product_id AS productId, quantity FROM StoreManager.sales
    INNER JOIN sales_products ON sales.id = sales_products.sale_id
    WHERE sale_id = ?
    ORDER BY sales.id, sales_products.product_id;`;
    const [item] = await db.query(sqlId, [id]);
    return item;
  },

  async add(sale) {
    const { productId, quantity } = sale;
    const sql = `INSERT INTO sales_products (sale_id, product_id, quantity)
    SELECT MAX(id), ?, ? FROM sales`;
    await db.query(sql, [productId, quantity]);
    return {};
  },

  async addProductSales() {
    const sql = 'INSERT INTO sales (date) VALUES (?)';
    const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const [{ insertId: id }] = await db.query(sql, [date]);
    return id;
  },
};

module.exports = modelSales;