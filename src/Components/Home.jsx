import React from 'react';
import { useState} from 'react';

const Home = ({category,heading}) => {
  const [news,setNews]=useState([]);
  
  let api=`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds${category}.cms`;
  console.log(api);
  const fetchApiData=async(url)=>{
   try {
       const res=await fetch(url);
       const data=await res.json();
       setNews(data.items);
       console.log(news);
   } catch (error) {
       console.log(error);
   }
  }
  fetchApiData(api);

   function show(element){
    return<>
       <div className="home">
      <h2 >{element.title}</h2>
      <img src={element.enclosure.link} alt="news" />
      <br />
      <div><h5 className='right' >{element.author}</h5>
      <h5 className='left'>{element.pubDate}</h5></div>
      <p className='clear'>{element.description}</p>
      <button><a href={element.link}>Read more</a></button>
      <hr className='clear'></hr>
    </div>
    </>
   
   }
  

  return (
    
     <>
      <h1 className="heading">{heading}</h1>
     {news.map(show)};
      
     </>
   
  )
}

export default Home;
