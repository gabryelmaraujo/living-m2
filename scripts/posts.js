import { observer } from "./observer.js"
import { obtainPage } from "./obtainPage.js"


async function postsPush(){

    const divObserver = document.querySelector('.observer')

    const page = await obtainPage()
    
    const posts = page.news
    observer.observe(divObserver)


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
                        <button class="showPostBttn" id="showPostBttn">
                            <p class="bttnText">Acessar conteúdo</p>
                            <img src="/images/spinner.png" alt="" class="loadingSpinner hide">
                        </button>
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

            const buttonChilds = Array.from(e.childNodes)

            const bttnText = buttonChilds[1]
            bttnText.classList.add("hide")

            const spinner = buttonChilds[3]
            spinner.classList.remove("hide")

            setTimeout(()=>{
                window.location.href="/pages/post/index.html"
            }, 1500)
        })
    })

}

export { postsPush }

let page = 1

const renderNewPosts = async () => {
    const dados = await obtainPage(page)

    const post = dados.news


    if(dados.nextPage < 4){
        post.forEach(e =>{
        
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
                            <button class="showPostBttn" id="showPostBttn">
                                <p class="bttnText">Acessar conteúdo</p>
                                <img src="/images/spinner.png" alt="" class="loadingSpinner hide">
                            </button>
                        </div>
    
                    </section>
                </li>
    
    
            `)
    
    
        })

        page++

        const showPostBttn = document.querySelectorAll("#showPostBttn")
        const bttnArr = Array.from(showPostBttn)
        bttnArr.forEach((e) => {
            e.addEventListener('click', ()=>{
                const selectedPost = e.parentElement.parentElement.parentElement.id
                
                const clickedPost = {
                    postId: selectedPost
                }
    
                localStorage.setItem("@living/selectedPost:", JSON.stringify(clickedPost))
    
                const buttonChilds = Array.from(e.childNodes)
    
                const bttnText = buttonChilds[1]
                bttnText.classList.add("hide")
    
                const spinner = buttonChilds[3]
                spinner.classList.remove("hide")
    
                setTimeout(()=>{
                    window.location.href="/pages/post/index.html"
                }, 1500)
            })
        })

    }
    
}

export { renderNewPosts }