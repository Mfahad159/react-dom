import { use } from "react"
import { useState } from "react";
import React from "react";
import { useEffect } from "react";

export default function Github()
{
   const [data,SetData] = useState([]);
    
        useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/Mfahad159");
                const json = await response.json();
                SetData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-3xl font-bold text-center my-8 transition-0.3s m-10 bg-gradient-to-b from-orange-500 to-orange-700 text-white p-4 rounded-lg">        
                Github Follower : {data.public_repos}
            </h1>   
            <p className="text-center text-gray-600">
                This is a placeholder for the Github component. You can add your Github related content here.
            </p>
        </div>
    )
}