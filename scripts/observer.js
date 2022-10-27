import { renderNewPosts } from "./posts.js"

const observer = new IntersectionObserver(async (entries) =>{
    if(entries[0].isIntersecting){
        await renderNewPosts()
    }
    
})

export { observer }