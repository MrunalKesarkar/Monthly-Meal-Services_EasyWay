import React, { useState, useEffect } from "react";
import Messes from "../db"; // Assuming mess data is imported from db
import Navbar from "../components/Navbar/navbar";

const AddToCart = ({ onIncrement, onDecrement, onDelete }) => {
  const [cartMess, setCartMess] = useState([]); // State for messes in the cart
  const [total, setTotal] = useState(0); // State for the total price

  // Fetch messes in the cart on component mount
  useEffect(() => {
    const cartMesses = Messes.filter((element) => element.isInCart === true);
    setCartMess(cartMesses);
  }, []);

  // Calculate the total price whenever the cart messes change
  useEffect(() => {
    let subtotal = 0;
    for (let i = 0; i < cartMess.length; i++) {
      subtotal += cartMess[i].price * cartMess[i].count;
    }
    setTotal(subtotal);
  }, [cartMess]);

  return (
    <div>
      <Navbar cartnum={cartMess.length} />
      <div className="container mt-5 p-3 cart">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="product-details mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Add To <b>Cart</b></h2>
              </div>
              <div>
                <h4 className="d-flex justify-content-between">
                  <span>Shopping Cart</span>
                  <span>{cartMess.length} Items</span>
                </h4>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-4">
                    <table className="table text-center tablecart">
                      <thead className="text-grey">
                        <tr>
                          <th>Mess Details</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Total</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartMess.map((mess) => (
                          <tr key={mess.id}>
                            <td className="align-middle d-flex messImage">
                              <img
                                className="rounded"
                                src={mess.image}
                                width={40}
                                alt={mess.name}
                              />
                              <div className="p-2">
                                <span className="d-block messname">{mess.name}</span>
                              </div>
                            </td>
                            <td className="align-middle">
                              <div className="d-flex justify-content-center">
                                <button
                                  className="btn-sm bg-muted"
                                  onClick={() => onDecrement(mess)}
                                  type="button"
                                >
                                  <i className="fas fa-minus"></i>
                                </button>
                                <div className="px-2 border-bg-muted input">{mess.count}</div>
                                <button
                                  className="btn-sm bg-muted"
                                  onClick={() => onIncrement(mess)}
                                  type="button"
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="align-middle">{mess.price} Rs</td>
                            <td className="align-middle">{mess.price * mess.count} Rs</td>
                            <td className="align-middle">
                              <i
                                className="fas fa-trash mx-4 delete"
                                onClick={() => onDelete(mess)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="fas fa-arrow-left"></i>
                <span
                  className="ml-2 continue-shopping"
                  style={{
                    border: "1px solid #ffc107",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => (window.location.href = "/")}
                >
                  Continue Shopping
                </span>
              </div>
            </div>
          </div>

          <div className="card col-md-3 mx-auto">
            <div className="card-header">
              <h6 className="card-text">Order Summary</h6>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between pt-1">
                <h6>Subtotal</h6>
                <h6>{total} Rs</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Shipping</h6>
                <h6>10 Rs</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between">
                <h6>Total Cost</h6>
                <h6>{total + 10} Rs</h6>
              </div>
              <button className="btn btn-block btn-warning">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
