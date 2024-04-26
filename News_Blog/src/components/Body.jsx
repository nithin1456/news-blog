import { useEffect, useState } from "react"
import Item from "./Item";


const Body = ({category}) => {
  const [articles , setArticles] = useState([]);
  useEffect(()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json()).then(data=> setArticles  (data.articles));

  },[category])

  return (
    <div>
     <h1 className="text-center">Latest <span className=" badge   text-danger bg-dark-subtle "  >News</span></h1>
     {articles.map((news,index) =>{
      return <Item key={index} title = {news.title} description = {news.description} src ={news.urlToImage} url = {news.url} />
     })}
    </div>
  )
}

export default Body
