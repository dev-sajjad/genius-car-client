import React from "react";

const OrderRow = ({ order, handleDeleteOrder, handleStatusUpdate }) => {
    const { _id, serviceName, price, phone, customer, message, image,status } = order;
    
    
 
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDeleteOrder(_id)}
            className="btn btn-sm btn-circle"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">${price}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        {phone}
      </td>
      <td>{message}</td>
      <td>
        <div onClick={() => handleStatusUpdate(_id)}>
          {status ? (
            <button className="btn btn-outline btn-success">{status}</button>
          ) : (
            <button className="btn btn-outline btn-error">Pending</button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
