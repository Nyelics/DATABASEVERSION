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
    <div >
      <h1 >Inventory</h1>
      <div>
        <table>
          <thead className="">
            <tr>
              <th>BARCODE</th>
              <th>CATEGORY</th>
              <th>BIN#</th>
              <th>LOCATION</th>
              <th>UNIT</th>
              <th>QTY</th>
              <th>REORDER QTY</th>
              <th>COST</th>
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