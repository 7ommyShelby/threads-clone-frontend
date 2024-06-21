import React from 'react'

const Profile = () => {

    return (

        <div className="bg-black text-white p-4 rounded-lg">
            <div className="flex items-center mb-4">
                <img src="/path-to-profile-image.jpg" alt="Profile" className="h-12 w-12 rounded-full mr-2" />
                <div>
                    <p className="font-bold">Robert J Oppenheimer</p>
                    <p>thedestroyerofworlds</p>
                </div>
            </div>
            <p>The guy who reshaped the world</p>
            <span className="text-gray-400">5,541 followers</span>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2">Follow</button>
        </div>
    )
}

export default Profile
