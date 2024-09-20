import React from "react";

function Contact() {
  return (
    <>
      <div className={`w-full flex justify-center`}>
        <div className="border py-1 px-4 rounded-md shadow-md w-96 mt-10 mb-12">
          <h3 className="font-bold text-lg">Contact</h3>
          {/* Name */}
          <div className="flex flex-col mt-4 space-y-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 outline-none px-3 py-1 border rounded-md"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col mt-4 space-y-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 outline-none px-3 py-1 border rounded-md"
            />
          </div>
          {/* Password */}
          <div className="flex flex-col mt-4 space-y-2">
            <label>Message</label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Bio"
            ></textarea>
          </div>
          {/* modal bottom */}
          <div className="flex mx-auto justify-center items-center h-20">
            <button className="btn bg-pink-600 h-4">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
