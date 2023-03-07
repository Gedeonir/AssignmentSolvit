/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./card";
import loadingGif from '../image/loading.gif'

  const Cards=()=>{
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);

    const handleFetch=async()=>{
        await axios.get('https://dummyjson.com/posts')
        .then((response)=>{
            setPosts(response.data.posts);
            setLoading(false);
        })
    }

    React.useEffect(()=>{
       handleFetch()
    },[posts])
    
    return (
        
        <div className="block my-8">
            {loading?(
                <div className=" w-full mx-auto p-32 items-center">
                    <img src={loadingGif} alt="" className="max-w-xs mx-auto"/>
                    <p className="text-center">Fetching posts,I will be dancing for a moment</p>
                </div>
            ):(
                <div className="lg:grid lg:grid-cols-3 lg:gap-4 sm:block my-8">
                    {posts?.map((post)=>{
                        return <Card key={post.id} title={post.title} body={post.body}/>
                    })}
                </div>
            )}
            
        </div>
    

      );
    }

    export default Cards
    