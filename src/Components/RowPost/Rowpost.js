import React,{useEffect,useState} from 'react'
import './Rowpost.css';
import YouTube from 'react-youtube';
import{imageUrl,API_KEY}from '../../Constants/constants'
import axios from '../../axios';
function Rowpost(props) {
  const[movies,setmovies] = useState([])
  const[urlId,setUrlId]=useState('')
  useEffect(() =>{
    axios.get(props.url).then(response=>{
      console.log(response.data.results)
        setmovies(response.data.results)
    })

  },[])
  const opts={
    height:'400',
    width:'100%',
    playerVars:{
      autoplay:1,
    },


  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results!==0){
        setUrlId(response.data.results[0])
        
      }else{
        console.log('array empty')
      }
    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'}src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          
         )}
         
             


       
           
            
        </div>
        

        { urlId && <YouTube  opts={opts}videoId={urlId.key}/>}
    </div>
  )
}

export default Rowpost
