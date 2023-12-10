
import { useContext } from 'react';
import { DetailsContext } from '../components/Products/DetailsContext';
import ContactForm from '../components/Layout/ContactForm';

const BuyNow = () => {
  const { details } = useContext(DetailsContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <h1 className="mb-8 text-3xl font-bold">{details.title}</h1>
      <p className="mb-8">{details.description}</p>
      <h1 className="mb-8 font-bold">{details.price * details.quantity} ₹</h1>
      <ContactForm />
    </div>
  );
};

export default BuyNow;

 
