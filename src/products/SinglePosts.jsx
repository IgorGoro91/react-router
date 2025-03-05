import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const SinglePosts = () =>{

    const {id} = useParams()
    
    const [post, setPost] = useState({
        id: '',
        title: '',
        content: '',
        image: '',
        tags: []

    })

    
    useEffect( () =>{
        axios.get('http://localhost:4000/api/posts' + '/' + id)
            .then(res => setPost(res.data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <h1>Post Singolo {post.title}</h1>
    )
}
export default SinglePosts

