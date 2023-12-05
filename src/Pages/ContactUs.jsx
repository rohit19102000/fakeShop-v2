


import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [from_name, setFrom_Name] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm('service_xu7iwli', 'template_2g7krkp', e.target, 'JajF2pawbLwPmW_E7')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setFrom_Name('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    // <div className="bg-white rounded-lg shadow-lg p-6">
    //   <h2 className="text-lg font-medium mb-4 ">Contact Us</h2>
    //   <form onSubmit={handleSubmit} className="space-y-4">
    //     <div>
    //       <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
    //         Name
    //       </label>
    //       <input 
    //         type="text"
    //         id="name"
    //         name="user-name"
    //         className="w-full p-2 border rounded"
    //         value={from_name}
    //         onChange={(e) => setFrom_Name(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="user-Email"
    //         className="w-full p-2 border rounded"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //       <div>
    //       <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
    //         Subject
    //       </label>
    //       <input
    //         type="text"
    //         id="subject"
    //         name="User-Subject"
    //         className="w-full p-2 border rounded"
    //         value={subject}
    //         onChange={(e) => setSuject(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
    //         Message
    //       </label>
    //       <textarea
    //         id="message"
    //         name="message"
    //         className="w-full p-2 border rounded"
    //         value={message}
    //         onChange={(e) => setMessage(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className="bg-neutral w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
    //       >
    //       Send
    //     </button>
    //   </form>
    // </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-lg font-medium mb-4">Contact Us</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="user-name"
          className="input input-bordered w-full"
          value={from_name}
          onChange={(e) => setFrom_Name(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user-Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-1 font-medium text-gray-700">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="User-Subject"
          className="input input-bordered w-full"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="input input-bordered w-full h-40"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
  type="submit"
  className="btn btn- w-full bg-blue-500 hover:bg-blue-600 text-white"
>
  Send
</button>
    </form>
  </div>

    );
}

export default ContactUs;
