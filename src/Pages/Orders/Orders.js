import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  // delete a order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm('Are you sure want to cancel this order!')
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Successfully deleted order!')  
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
    
  };


  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'Approved'})
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter(order => order._id !== id)
          const approving = orders.find(odr => odr._id === id)
          approving.status = 'Approved'
          const newOrders = [approving, ...remaining]
          setOrders(newOrders)
       }
      })
    .catch(err => console.error(err))
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
