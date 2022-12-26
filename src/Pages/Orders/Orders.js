import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  // load user orders using email query 
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      // for JWT
      headers: {
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
    })
      .then((res) => {
        // for unauthorized user
        if (res.status === 401 || res.status === 403) {
         return logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email, logOut]);


  // delete a order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm('Are you sure want to cancel this order!')
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully deleted order!");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
    
  };


  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      })
      .catch((err) => console.error(err));
  } 


  return (
    <div className="overflow-x-auto w-full my-10">
      <table className="table w-full">
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order._id} order={order} handleDeleteOrder= {handleDeleteOrder} handleStatusUpdate={handleStatusUpdate} ></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
