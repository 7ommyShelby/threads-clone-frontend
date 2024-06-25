import { useDispatch } from "react-redux"
import { setuser } from "../redux/slice"

const token = localStorage.getItem("usertoken")


const getuser = async (dispatch) => {

    // const dispatch = useDispatch()

    try {
        const loggeduser = await fetch('https://threads-clone-backend-2770.onrender.com/api/users/userinfo', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            }
        })

        const res = await loggeduser.json();

        localStorage.setItem("user", JSON.stringify(res))
        
        dispatch(setuser(res))

    } catch (error) {
        console.log("err", error);
    }
}


export default getuser