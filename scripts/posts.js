import { obtainPage } from "./obtainPage.js"


async function postsPush(){

    const page = await obtainPage()
    
    const posts = page.news


    posts.forEach((e) => {

        const postId = e.id
        const postTitle = e.title
        const postDesc = e.description
        const postContent = e.content
        const postCategory = e.category
        const postImage = e.image

        const ulPosts = document.getElementById("postsList")


        ulPosts.insertAdjacentHTML('beforeend',`
        
            <li class="post" id="${postId}">
                <section class="postHeader">
                    <img src="${postImage}" alt="${postTitle}" class="postImg">
                </section>
                <section class="postMain">
                    <div class="postTitle">
                        <h3>${postTitle}</h3>
                    </div>
                    <div class="postResume">
                        <p>${postDesc}</p>
                    </div>
                    <div class="postBttn">
                        <button class="showPostBttn" id="showPostBttn">Acessar conteúdo</button>
                    </div>

                </section>
            </li>


        `)

    })

    const showPostBttn = document.querySelectorAll("#showPostBttn")
    const bttnArr = Array.from(showPostBttn)
    bttnArr.forEach((e) => {
        e.addEventListener('click', ()=>{
            const selectedPost = e.parentElement.parentElement.parentElement.id
            
            const clickedPost = {
                postId: selectedPost
            }

            localStorage.setItem("@living/selectedPost:", JSON.stringify(clickedPost))
        })
    })

}
postsPush()

