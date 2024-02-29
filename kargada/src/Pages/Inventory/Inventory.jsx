import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:3007/inventory");
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Inventory</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th className="text-white bg-primary">BARCODE</th>
              <th className="text-white bg-primary">CATEGORY</th>
              <th className="text-white bg-primary">BIN#</th>
              <th className="text-white bg-primary">LOCATION</th>
              <th className="text-white bg-primary">UNIT</th>
              <th className="text-white bg-primary">QTY</th>
              <th className="text-white bg-primary">REORDER QTY</th>
              <th className="text-white bg-primary">COST</th>
              </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td> {item.barcode}</td>
                <td>{item.category}</td>
                <td>{item.bin}</td>
                <td>{item.location}</td>
                <td>{item.unit}</td>
                <td>{item.quantity}</td>
                <td>{item.reorder}</td>
                <td>{item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;