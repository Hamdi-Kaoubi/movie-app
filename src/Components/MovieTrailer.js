import React from 'react'
import { Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
const MovieTrailer = ({Data}) => {
    let {id}=useParams()
    const history = useNavigate()
    console.log(id,"trailer")
  return (
    <div>
    <Button onClick={()=>history(-1)}>Go back</Button>
    
    {Data.map((el)=>el.id==id?<iframe title='MovieTrailer' width="560" height="315" src={el.trailer} ></iframe>:console.log(el.id))}
    </div>
    
  )
}

export default MovieTrailer