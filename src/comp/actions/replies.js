
async function reply(id){
  const token = localStorage.getItem('usertoken')
    try {
        const postreply = await fetch("https://threads-clone-backend-2770.onrender.com/api/posts/reply/" + id, {
            method: "POST",
            headers: {
              Authorization: token,
              "Content-Type": "application/json"
            },
          })

          const res = await postreply.json();
          console.log(res);

    } catch (error) {
        console.log(error);
    }
} 

export default reply