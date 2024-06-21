const token = localStorage.getItem('usertoken')

async function reply(id){
    try {
        const postreply = await fetch("http://localhost:10000/api/posts/reply/" + id, {
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