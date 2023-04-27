import axios from 'axios'

//get articles
export const getArticles= async ()=>{
let articles = await axios.get('https://jsonplaceholder.typicode.com/posts')
return articles
}

//get single article
export const getSingleArticle=async (id)=>{
    let article= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return article
}