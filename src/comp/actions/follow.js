const token = localStorage.getItem('usertoken')


const followhandler = async (targetid) => {
    try {
        const follow = await fetch("https://threads-clone-backend-2770.onrender.com/api/users/follow/" + targetid, {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
        })

        const res = await follow.json()
        console.log(res);

    } catch (error) {
        console.log(error);
    }

}

export default followhandler