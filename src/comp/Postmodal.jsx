import React from "react";
import photo from '../assets/opp.jpg'
import createpost from "./actions/createpost";
import { useState } from "react";


export default function Modal() {

  const user = JSON.parse(localStorage.getItem('user'))

  const [text, settext] = useState("")

  const [showModal, setShowModal] = useState(false);

  return (
    <>

      <div onClick={() => { setShowModal(true) }} className="bg-zinc-900 px-4 py-6 rounded-lg flex items-center">
        <img src={photo} alt="User Avatar" className="rounded-full w-10 h-10 mr-4" />
        <input
          type="text"
          placeholder="Start a thread..."
          className="flex-grow bg-transparent outline-none text-white placeholder-gray-400"
        />
        <button className="bg-black hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-2xl">
          Post
        </button>

      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex bg-black bg-opacity-75  fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="bg-black relative my-6 w-1/2  mx-auto max-w-3xl">
              <div className="bg-zinc-900  p-6 rounded-lg">
                <div className="flex gap-4">
                  <div className="feedpic">
                    <img src={photo} alt="" />
                  </div>
                  <input onChange={(e) => {
                    settext(e.target.value)
                  }}
                    type="text"
                    placeholder="Start a thread..."
                    className="w-full p-2 mb-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none"
                  />
                </div>

                <div className="flex justify-between items-center mb-2">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full">
                      {/* Icon component or img tag for image icon */}
                    </button>
                    <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full">
                      {/* Icon component or img tag for GIF icon */}
                    </button>
                    <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full">
                      {/* Icon component or img tag for poll icon */}
                    </button>
                    <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full">
                      {/* Icon component or img tag for emoji icon */}
                    </button>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Anyone can reply &amp; quote</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="px-4 py-2 text-white font-semibold bg-black hover:bg-zinc-800 focus:outline-none  focus:ring ring-blue-300 rounded-md" onClick={() => {
                    settext('')
                    setShowModal(false)
                  }}>Discard</button>
                  <button
                    onClick={ async () => {
                     await createpost(user?._id, text)
                      settext("")
                      setShowModal(false)
                    }}
                    className="
            px-4 py-2 
            text-white 
            font-semibold 
            bg-black 
            hover:bg-zinc-800 
            focus:outline-none 
            focus:ring 
            ring-blue-300 
            rounded-md
          "
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}