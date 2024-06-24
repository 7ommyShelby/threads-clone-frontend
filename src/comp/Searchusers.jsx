import React, { useEffect, useState } from 'react'

const Searchusers = () => {

    const [allusers, setallusers] = useState([])

    const getallusers = async ()=>{
        const profiles = await fetch('https://threads-clone-backend-2770.onrender.com/api/users/getusers')

        const res = await getallusers.json();
        // setallusers(res);
    }

    useEffect(()=>{
        getallusers();
    })

    const profiles = [
        { username: 'ADVICE CODE', verified: true, description: 'Motivation | Self-Improvement', followers: '41.4k' },
        { username: 'BECOME ALPHA!', verified: true, description: 'Self improvement | Motivation | Dating', followers: '83.9k' },
        { username: 'xavierv_uncle', verified: false, description: 'Chatitanyara✨', followers: '83.2k' },
    ];

    return (
        <>
            <div className="bg-zinc-900 text-white p-4">
                {profiles.map((profile) => (
                    <div key={profile.username} className="mb-4">
                        <div className="flex items-center">
                            <span className="text-lg font-bold">{profile.username}</span>
                            {profile.verified && (
                                <svg
                                    className="w-4 h-4 ml-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            )}
                        </div>
                        <p className="text-gray-500 text-sm">{profile.description}</p>
                        <div className="flex items-center mt-2">
                            <span className="text-gray-500 text-sm">{profile.followers} followers</span>
                            <button className="ml-auto bg-zinc-800 border py-1 px-4 rounded-lg text-blue-500 hover:text-blue-700 text-sm focus:outline-none">
                                Follow
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Searchusers
