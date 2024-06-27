import { useSelector } from "react-redux";


const createpost = async (text) => {
    
    const user  = useSelector((state)=>state.user)
    
    const token = localStorage.getItem('usertoken')
    
    try {
        const post = await fetch("https://threads-clone-backend-2770.onrender.com/api/posts/create", {
            method: "POST",
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postedBy: user,
                text: text
            })
        })

        const res = await post.json();
        console.log(res);

    } catch (error) {
        console.log(error);
    }
}

export default createpost