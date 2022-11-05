import React ,{useEffect, useState} from 'react'
import axios from 'axios'
// import {Link} from "react-router-dom"
import { Box, Heading, Link, Image, SimpleGrid} from '@chakra-ui/react';


function HomePage() {

  const [get, setGet] = useState ([{}]);
  // const Api_Img= 'https://image.tmdb.org/t/p/w500';


  useEffect ( () => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2d6b3291586411f85a61201ca446cbb8&with_genres=16')  //16
    .then ( (res) => {
      setGet(res.data.results);
      console.log(res.data.results);
    })
  }, []);


  const onRemove = (id) => {
    console.log(id)
    axios.delete(`https://api.themoviedb.org/3/discover/movie?api_key=2d6b3291586411f85a61201ca446cbb8&with_genres=28${id}`)
    .then (res => {
      setGet(get.filter (ele => {
        return ele.id != id
      }))
    })
  }

  return (
    <div >
       <SimpleGrid columns={[2, null, 5]} spacing='40px'>
          
    {get.map ( (item) => {
      return (
        
          <div >

            <Box borderRadius="lg" overflow="hidden" maxW='sm' borderWidth='1px'  boxShadow='dark-lg' >
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image transform="scale(1.0)"
                  src={ `https://image.tmdb.org/t/p/w500${item.poster_path}` } alt="some text" objectFit="contain" width="100%" transition="0.3s ease-in-out" _hover={{ transform: 'scale(1.05)'}}/>
              </Link>
            </Box>
            <Heading as="h2" marginTop="5"> {item.original_title}</Heading>
            <button className='btn' >Delete</button>
              <button className='btn' >Update</button>
            
          </div>
        
     )
    })}
    </SimpleGrid>
    </div>
  )
}

export default HomePage

