import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setstatus, setfeeds, getrefresh } from './redux/slice';
import { PiHeartThin } from "react-icons/pi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { TbSend } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";
import photo from '../assets/opp.jpg'
import like from '../comp/actions/likehandler'
import Modal from './Postmodal';
import { Link } from 'react-router-dom';



const Screen = () => {
  const token = localStorage.getItem("usertoken")
  const dispatch = useDispatch()
  const userfeeds = useSelector((state) => state.userfeeds)

  const getfeeds = async () => {

    try {
      const feeds = await fetch("https://threads-clone-backend-2770.onrender.com/api/posts/feed", {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        },
      })

      const res = await feeds.json();

      console.log(res);

      if (res.status) {
        localStorage.clear()
        dispatch(setstatus(false))
        return
      }

      dispatch(setfeeds(res))

    } catch (error) {
      console.log("err", error);
    }
  }

  useEffect(() => {
    getfeeds()
  }, [])

  return (
    <>
      {userfeeds ? (
        <main className='text-white py-3'>
          <Modal />
          <hr />

          <div className='feeds h-[500px] overflow-y-scroll'>
            {
              userfeeds.map((e) => {
                return (
                  <>
                    <section className='threads w-full py-4 px-4 flex gap-2'>
                      <div className='feedpic'>
                        <img src={photo} alt="" />
                      </div>
                      <div className='flex flex-col gap-5'>

                        <Link to={`/post/${e._id}`}>
                          <div className='flex gap-1 flex-col'>
                            <h3 className='lowercase font-semibold'>{e.postedBy.username}</h3><span></span>
                            <p className='text-sm font-light'>{e.text}</p>
                          </div>
                        </Link>
                        <div className='options'>
                          <ul className='flex gap-4 text-xl'>
                            <li onClick={() => {
                              like(e._id)
                            }}><PiHeartThin />{e.likes.length}</li>
                            <li><HiOutlineChatBubbleOvalLeft />{e.reply.length}</li>
                            <li className='text-2xl'><BiRepost /></li>
                            <li><TbSend /></li>
                          </ul>
                        </div>
                      </div>
                    </section>

                  </>
                )
              })
            }
          </div>

        </main>
      )
        :
        (
          <h1>Session timed out</h1>
        )
      }
    </>
  )
}

export default Screen
