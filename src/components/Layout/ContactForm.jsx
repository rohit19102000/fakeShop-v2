import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { DetailsContext } from '../Products/DetailsContext';

const ContactForm = () => {
  const { details } = useContext(DetailsContext);
  const [from_name, setFrom_Name] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   

    emailjs
      .send(
        'service_xu7iwli',
        'template_d370rl8',
        {
          from_name,
          email,
          productTitle: details.title,
          productId: details.id,
          productPrice: `${Math.floor(details.price * details.quantity)} ₹` ,
          to_name:'Rohit'

        },
        'JajF2pawbLwPmW_E7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFrom_Name('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name='from_name'
          className="block w-full p-2 border rounded"
          value={from_name}
          onChange={(e) => setFrom_Name(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="block w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-indigo-500 rounded"
      >
        Buy 
      </button>
    </form>
  );
};

export default ContactForm;