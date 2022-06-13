const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/products.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
})


const getProducts = (req, res) => {
    db.all(`SELECT * FROM products`, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
        }
        rows.reverse();
        res.status(200).send(rows);

    })
}

const getProduct = (req, res) => {
    db.get(`SELECT * FROM products WHERE id = ${req.params.id}`,(err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
        }
        res.status(200).send(row);
    })
}

const addProduct = (req, res) => {
    db.run(`INSERT INTO products (title, price, description, img_url, category, rating) VALUES ('${req.body.title}', ${req.body.price}, '${req.body.description||""}','${req.body.img_url||''}', '${req.body.category}', '${req.body.rating}')`, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
        }
        res.status(200).send('Product added.');
    })
}

module.exports = {
    getProducts,
    getProduct,
    addProduct
}
