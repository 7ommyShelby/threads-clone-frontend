async function like(id) {
  
  const token = localStorage.getItem('usertoken');
  
    try {
      const likedislike = await fetch("https://threads-clone-backend-2770.onrender.com/api/posts/like/" + id, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        },
      })

      const res = await likedislike.json()

      console.log(res);

    } catch (error) {
      console.log("something went wrong", error);
    }
  }

export default like;