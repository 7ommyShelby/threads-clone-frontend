const token = localStorage.getItem('usertoken')

const createpost = async (user, text) => {

    try {
        const post = await fetch("http://localhost:10000/api/posts/create", {
            method: "POST",
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postedBy : user,
                text : text
            })
        })

        const res = await post.json();
        console.log(res);

    } catch (error) {
        console.log(error);
    }
}

export default createpost