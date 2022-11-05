import React ,{useEffect, useState} from 'react'
import axios from 'axios'
// import {Link} from "react-router-dom"
import { Box, Heading, Link, Image, SimpleGrid} from '@chakra-ui/react';


function HomePage() {

  const [get, setGet] = useState ([{}]);
  // const Api_Img= 'https://image.tmdb.org/t/p/w500';


  useEffect ( () => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2d6b3291586411f85a61201ca446cbb8&with_genres=28')  //16
    .then ( (res) => {
      setGet(res.data.results);
      console.log(res.data.results);
    })
  }, []);


  const onRemove = (id) => {
    console.log(id)
    axios.delete(`https://6362424b66f75177ea2a9980.mockapi.io/ToDoList/${id}`)
    .then (res => {
      setGet(get.filter (ele => {
        return ele.id != id
      }))
    })
  }

  return (
    <div className='cards'>
          
    {get.map ( (item) => {
      return (
        
          <div className='contener'>
            <div className='image-contener'>
              <Image src={ `https://image.tmdb.org/t/p/w500${item.poster_path}` } />
            </div>
            <div className='title-contener'>
              <h2 as="h2" marginTop="5"> {item.original_title}</h2></div>
            <div className='btn-contener'>
              <button className='btn' onClick={onRemove}>Delete</button>
              <button className='btn' >Update</button>
            </div>
          </div>
        
     )
    })}
    </div>
  )
}

export default HomePage

