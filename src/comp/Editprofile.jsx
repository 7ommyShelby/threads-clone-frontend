import React, { useState, useRef } from 'react';

function Editprofile({ userid, }) {
    const [isOpen, setIsOpen] = useState(false);

    const nameref = useRef()
    const usernameref = useRef()
    const emailref = useRef()
    const passwordref = useRef()
    const profilepicref = useRef()
    const bioref = useRef()

    const edit = async (id) => {

        const token = localStorage.getItem("usertoken")

        try {
            const update = await fetch("https://threads-clone-backend-2770.onrender.com/api/users/update/" + id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify({
                    name: nameref.current.value,
                    username: usernameref.current.value,
                    password: passwordref.current.value,
                    email: emailref.current.value,
                    bio: bioref.current.value,
                })
            })

            const res = await update.json()
            console.log(res);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className=" editpro w-full"
            >
                Edit Profile
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center z-50">
                    <div className="bg-zinc-900 updateprofile p-6 rounded-xl shadow-lg w-2/5 border">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-white text-2xl">Edit Profile</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                &times;
                            </button>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input ref={nameref}
                                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="name"
                                    type="text"
                                    placeholder="Enter name..."
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm mb-2" htmlFor="username">
                                    username
                                </label>
                                <input ref={usernameref}
                                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="username"
                                    type="text"
                                    placeholder="Enter username..."
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input ref={passwordref}
                                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="name"
                                    type="text"
                                    placeholder="Enter name..."
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input ref={emailref}
                                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="name"
                                    type="email"
                                    placeholder="Enter email..."
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm mb-2" htmlFor="bio">
                                    Bio
                                </label>
                                <input ref={bioref}
                                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="bio"
                                    type="text"
                                    placeholder="write about yourself..."

                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm mb-2" htmlFor="link">
                                    Link
                                </label>
                                <input
                                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="link"
                                    type="url"
                                    placeholder="Add link"
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <label className="block text-gray-400 text-sm" htmlFor="privateProfile">
                                    Private profile
                                </label>
                                <input
                                    type="checkbox"
                                    id="privateProfile"
                                    className="w-3 h-3 bg-gray-700 text-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => {
                                        edit(userid)
                                        setIsOpen(false)
                                    }}
                                    type="submit"
                                    className="w-full p-4 bg-white text-black font-bold rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default Editprofile;
