const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Onepiece22",
  database: "warehouse",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/inventory", (req, res) => {
  const q = "SELECT * FROM inventory";
  db.query(q, (err, data) => {
    if (err) {
      console.log("Error retrieving inventory:", err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const { barcode, category, bin, location, unit, quantity,reorder, cost } = req.body;
  db.query(
    "INSERT INTO inventory (barcode, category, bin, location, unit, quantity, reorder, cost) VALUES (?,?,?,?,?,?,?,?)",
    [product, price, quantity, warehouse, image],
    (err, result) => {
      if (err) {
        console.log("Error creating product:", err);
        return res.json(err);
      }
      res.send("Product created successfully");
    }
  );
});

app.get("/inventory/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM inventory WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log("Error retrieving product:", err);
      return res.json(err);
    }
    res.send(result);
  });
});

app.delete("/inventory/:id", (req, res) => {
  const userId = req.params.id;
  const q = "DELETE FROM inventory WHERE id = ?";
  db.query(q, [userId], (err, data) => {
    if (err) {
      console.log("Error deleting product:", err);
      return res.json(err);
    }
    res.send("Product deleted successfully");
  });
});

app.put("/inventory/:id", (req, res) => {
  const userId = req.params.id;
  const { barcode, category, bin, location, unit, quantity, reorder, cost } = req.body;
  const q = "UPDATE inventory SET `barcode`= ?, `category`= ?, `bin`= ?, `location`= ?, `unit`= ?, `quantity`= ?, `reorder`= ?, `cost`= ? WHERE id = ?";
  const values = [barcode, category, bin, location, unit, quantity,reorder, cost];
  db.query(q, values, (err, data) => {
    if (err) {
      console.log("Error updating product:", err);
      return res.json(err);
    }
    res.send("Product updated successfully");
  });
});

app.listen(3007, () => {
  console.log("Yey, your server is running on port 3007");
});