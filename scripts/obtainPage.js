
async function obtainPage(pageNum){

    const baseUrl = "https://m2-api-living.herokuapp.com/news"
    const toPage = `?page=${pageNum}`
    
    const page = await fetch(baseUrl + toPage, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })

    const response = await page.json()
    

    return response


}

export { obtainPage }