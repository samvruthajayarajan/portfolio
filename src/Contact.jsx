import React from 'react'

const Contact = () => {
  return (
     <>
    <div id='contact' className="bg-gradient-to-r from-black via-blue-900 to-cyan-800 text-slate-300h-screen w-screen flex flex-col justify-center items-center bg-no-repeat bg-cover text-center">
         <h1 className="font-semibold text-4xl text-slate-100">CONTACT</h1>
      <div className="mt-4">
        <h4 className="font-normal text-slate-100">
        Feel free to contact by submitting the form below and i will get back you <br></br>as soon as possible
        </h4>
      </div>
       <form className="bg-slate-900 shadow-lg rounded-lg p-8 w-96  max-w-md">
    <div className="mb-4">
      <label className="block text-white font-thin mb-2 text-left">Name</label>
      <input id="name"type="text"placeholder="Enter your name"className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-500"/>
    </div>

    <div className="mb-4">
      <label className="block text-white font-thin mb-2 text-left">Email</label>
      <input id="email"type="email"placeholder="Enter your email"className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-500"/>
    </div>

    {/* <div className="mb-4">
      <label className="block text-white font-thin mb-2 text-left">Contact Number</label>
      <input id="contact"type="tel"placeholder="Enter your contact number"className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-500"/>
    </div> */}

    <div className="mb-4">
      <label className="block text-white font-thin mb-2 text-left">Message</label>
      <textarea id="message"rows="4"placeholder="Your message..."className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-500"></textarea>
    </div>

    <button type="submit"className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-black-700 transition">Submit</button>
  </form>
      </div>
</>
  )
}

export default Contact