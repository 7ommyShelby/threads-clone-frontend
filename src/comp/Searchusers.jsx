import React, { useEffect, useState } from 'react'
import followhandler from './actions/follow'
import { useDispatch, useSelector } from 'react-redux'
import { setuser } from './redux/slice'
import getuser from './actions/getuserdata'

const Searchusers = () => {

    const [allusers, setallusers] = useState([])
    const [showuser, setuser] = useState(false)
    const loggeduser = JSON.parse(localStorage.getItem('user'))

    const dispatch = useDispatch()
    // const loggeduser = useSelector((state) => state.user);

    const getallusers = async () => {
        const profiles = await fetch('https://threads-clone-backend-2770.onrender.com/api/users/getusers')
        const res = await profiles.json();
        console.log(res);
        setallusers(res);
    }

    console.log(loggeduser);

    useEffect( () => {
        getallusers();
    }, [])

    return (
        <>
            <div className="bg-zinc-900 text-white p-4">
                {allusers.map((profile) => (
                    <div key={profile?.username} className="mb-4 border-b py-3 border-b-neutral-600">
                        <div className="flex items-center">
                            <span className="text-lg font-bold">{profile?.username}</span>
                        </div>
                        <p className="text-gray-500 text-sm">{profile?.name}</p>
                        <div className="flex items-center mt-2">
                            <span className="text-gray-500 text-sm">{profile?.followers.length} followers</span>
                            <button onClick={async () => {
                                await followhandler(profile._id)
                                // await getuser(dispatch)
                            }} className="ml-auto bg-zinc-800 border py-1 px-4 rounded-lg text-blue-500 hover:text-blue-700 text-sm focus:outline-none">{loggeduser?.following?.includes(profile._id) ? "Unfollow" : "Follow"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Searchusers
