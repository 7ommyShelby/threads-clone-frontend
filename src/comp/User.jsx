import React, { useEffect, useState } from 'react'
import photo from '../assets/opp.jpg'
import { PiHeartThin } from "react-icons/pi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { TbSend } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";
import { getrefresh } from './redux/slice';
import { useDispatch } from 'react-redux';
import like from './actions/likehandler';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const User = () => {

    console.log("hello");
    const token = localStorage.getItem("usertoken")

    const navigate = useNavigate()
    const [posts, setposts] = useState([])
    const [user, setuser] = useState({})

    const dispatch = useDispatch()

    const getuser = async () => {

        try {
            const loggeduser = await fetch('https://threads-clone-backend-2770.onrender.com/api/users/userinfo', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                }
            })

            const res = await loggeduser.json();

            getpost(res._id)

            localStorage.setItem("user", JSON.stringify(res))

            setuser(res)

        } catch (error) {
            console.log("err", error);
        }
    }

    // const user = JSON.parse(localStorage.getItem("user"));

    console.log(user);

    async function getpost(loggeduserid) {

        try {
            const userpost = await fetch("https://threads-clone-backend-2770.onrender.com/api/posts/userposts/" + loggeduserid, {
                method: "GET",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json"
                },
            })

            const res = await userpost.json()

            setposts(res)

        } catch (error) {
            console.log("something went wrong", error);
        }
    }

    console.log(posts);

    useEffect(() => {
        getuser()
        return () => {
            setposts([])
        }
    }, [])

    return (
        <>
            <main className=' text-white'>
                <section className='p-4'>
                    <div className="profile w-full px-4 py-6 flex gap-4 justify-between items-center">
                        <div className="left flex flex-col gap-4">
                            <div>
                                <h1 className='uppercase font-bold text-2xl tracking-[5px]'>{user?.name}</h1>
                                <span className='lowercase'>{user?.username}</span>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <p className="bio">{user?.bio}</p>
                                <span>{user?.followers?.length} followers</span>
                            </div>
                        </div>
                        <div className="right flex flex-col items-end">
                            <div className='photo'>
                                <img src={photo} alt="" />
                            </div>
                        </div>
                    </div>
                    <button className='editpro w-full '>Edit profile</button>
                </section>

                <section className='threads py-4 gap-4 px-4 flex flex-col '>
                    <h1 className='text-xl font-bold'>Threads</h1>
                    <hr />
                    {
                        posts.length > 0 ? (
                            <div className='userpost  py-1 flex flex-col gap-2'>
                                {
                                    posts.map((e, index) => (

                                        <div key={index} className='flex gap-2 border-b py-1'>
                                            <div className='feedpic'>
                                                <img src={photo} alt="" />
                                            </div>
                                            <div className='flex flex-col gap-4 w-full'>
                                                <Link to={`/post/${e._id}`}>
                                                    <div>
                                                        <h3 className='font-bold lowercase'>{e.postedBy.username}</h3><span></span>
                                                        <p className='font-thin'>{e.text}</p>
                                                    </div>
                                                </Link>
                                                <div className='options'>
                                                    <ul className='flex gap-4 text-xl'>
                                                        <li onClick={() => {
                                                            like(e._id)
                                                        }}><PiHeartThin /><span>{e.likes.length}</span></li>
                                                        <li><HiOutlineChatBubbleOvalLeft /></li>
                                                        <li className='text-2xl'><BiRepost /></li>
                                                        <li><TbSend /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        ) : (
                            <>
                                <div className='min-h'>
                                    <h1>Write some threads....</h1>
                                </div>
                            </>
                        )

                    }
                </section>
            </main>


        </>
    )
}

export default User
