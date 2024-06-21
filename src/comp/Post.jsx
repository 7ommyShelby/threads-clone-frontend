import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import photo from '../assets/opp.jpg'
import like from './actions/likehandler';
import { useDispatch } from 'react-redux';
import { getrefresh } from './redux/slice';

const Post = () => {

const dispatch = useDispatch()

    const { id: postid } = useParams()
    const [postdata, setpostdata] = useState({})
    

    const getpost = async (id) => {
        try {
            const post = await fetch("https://threads-clone-backend-2770.onrender.com/api/posts/" + id)

            const res = await post.json();

            setpostdata(res)

            dispatch(getrefresh())

        } catch (error) {
            console.log(error);
        }
    }

    console.log(postdata);
    useEffect(() => {
        getpost(postid)
    }, [])

    return (<>
        {
            Object.keys(postdata).length > 0 ? (
                <>
                    <div className="bg-black text-white p-4 rounded-lg">
                        <div className="border-b border-gray-800 flex gap-4 pb-4">
                            <div className='feedpic'>
                                <img src={photo} alt="" />
                            </div>
                            <div className='flex gap-2 items-center py-2'>
                                <h2 className="text-lg font-bold">{postdata.postedBy.username}</h2>
                                <p className="text-gray-500 text-sm">{new Date(postdata.createdAt).toLocaleDateString('en-US')}</p>
                            </div>
                        </div>
                        <p className="pt-4">{postdata.text}</p>
                        <div className="flex items-center justify-between pt-4">
                            <button onClick={()=>{
                                like(postdata._id)
                            }} className="flex items-center">
                                <span>👍</span>
                                <span className="pl-2">{postdata.likes.length}</span>
                            </button>
                            <div className="flex space-x-4">
                                <button>💬 Comment</button>
                                <button>↗️ Share</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <p>
                            Something went wrong!
                        </p>
                    </div>
                </>
            )
        }
    </>
    );
}

export default Post
