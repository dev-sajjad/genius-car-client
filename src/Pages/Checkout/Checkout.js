import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.textArea.value;

         const order = {
           service: _id,
           serviceName: title,
           image: img,
           price,
             customer: name,
             phone,
             email,
             message
        };
        

        fetch("http://localhost:5000/orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("genius-token")}`,
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json(order))
          .then((data) => {
            if (data.acknowledged) {
              form.reset();
              navigate('/orders');
              alert("Successfully order placed!");
            }
          })
          .catch((err) => console.error(err));

    }


   


    return (
      <div className="p-20 bg-stone-200">
        <div className="mb-4 w-1/2 mx-auto text-center">
          <h2 className="text-2xl font-semibold  ">
            You want to buy this service:{" "}
            <span className="text-orange-400">{title}</span>
          </h2>
          <h3 className="text-2xl ">Price: ${price}</h3>
        </div>
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Your phone"
              className="input input-bordered w-full"
              requireds
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <textarea
            name="textArea"
            className="textarea textarea-bordered mt-5 w-full h-60"
            placeholder="Message"
          ></textarea>

            <button type="submit" className="btn btn-warning w-full mt-3">
              Place Order
             
            </button>
        </form>
      </div>
    );
};

export default Checkout;