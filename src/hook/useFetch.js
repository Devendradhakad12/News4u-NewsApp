import axios from "axios";
 import { useState,useEffect } from "react";

export const useFetch = (country, category, pageSize, apikey,setProgress) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [error,setError] = useState(false)
  const  capitalize  =(string)=>{
    let  capitalizeString = string.charAt(0).toUpperCase()+ string.slice(1)
    return capitalizeString
   }
 
  useEffect(() => {
    const fetchNews = async () => {
       setProgress(10)
       setLoading(true)
       setProgress(30)
      try {
        let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`)
         let data = await res.data
         setArticles(data.articles)
         setTotalResults(data.totalResults)
         setLoading(false)
         setProgress(100)
      } catch(error) {
     setError(error.message)
     setLoading(false)
     setProgress(100)
      }
    };
    document.title = `${capitalize(category)} - News4u`
    fetchNews()
  }, [category]);


  const reFetch = async()=>{
    setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page+1}&pageSize=${pageSize}`
    setPage(page+1)
    setLoading(true)
    try {
      let res = await axios.get(url)
       let data = await res.data
       setArticles(articles.concat(data.articles))
       setTotalResults(data.totalResults)
       setLoading(false)
       setProgress(100)
    } catch(error) {
   setError(error.message)
   setLoading(false)
   setProgress(100)
    }
  }

  return { articles, loading, totalResults,error,setPage,page,reFetch };
};
