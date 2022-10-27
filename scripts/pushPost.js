

async function pushPost(){

    const baseUrl = "https://m2-api-living.herokuapp.com/news/"
    const post = JSON.parse(localStorage.getItem("@living/selectedPost:"))
    const postId = post.postId
    
    const postInfos = await fetch(baseUrl + postId, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })

    const response = await postInfos.json()

    const postTitle = response.title
    const postImage = response.image
    const postContent = response.content

    console.log(postTitle, postImage, postContent)

    const postPage = document.getElementById("postPageMain")
    console.log(postPage)

    postPage.insertAdjacentHTML("afterbegin", `
        <section class="postPageTitle">
                <h2 class="openPostTitle">
                    ${postTitle}
                </h2>
                <p class="invite">Invite as many collaborators as you’d like. They can register as team members or join as guests – no registration required.</p>
        </section>
        <section class="openPostImgSection">
                <img src="${postImage}" alt="" class="openPostImg">
        </section>
        <section class="openPostMain">
                <p class="openPostDescription">
                    ${postContent}
                </p>
        </section>
    `)
    
}
pushPost()