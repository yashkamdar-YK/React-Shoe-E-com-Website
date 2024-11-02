import React from "react";
import Form from "react-bootstrap/Form";
const OutletPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Message sent successfully!");
  };

  return (
    <div>
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4628.549440755236!2d75.
      86909542792554!3d22.71786245617139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
      1!3m3!1m2!1s0x3962fd16bb311fbd%3A0xcb6d0c2ee3ea4003!2sNexus%20Indore%20Central%20(Earlier%20TI%20Next)!5e0!3m2!1sen!2sin!4v1727111887813!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" flex justify-center mt-10">
        <div className="w-[400px] mx-auto mt-5 p-6 bg-white shadow-md border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form action="https://formspree.io/f/myzgqbvp" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="Username"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-zinc-500 focus:border-zinc-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="Email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-zinc-500 focus:border-zinc-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-zinc-500 focus:border-zinc-500"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OutletPage;

// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     alert("Message sent successfully!");
//   };

//   return (
//     import React, { useState } from 'react';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     alert("Message sent successfully!");
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             rows="4"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

//   );
// };

// export default ContactForm;
