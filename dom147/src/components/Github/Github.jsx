import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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

 return (
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-3xl font-bold text-center my-8 transition-0.3s m-10 bg-gradient-to-b from-orange-500 to-orange-700 text-white p-4 rounded-lg">
                GitHub Followers: {data.followers}
            </h1>

            <p className="text-center text-gray-600">
                This is a placeholder for the GitHub component. You can add your GitHub-related content here.
            </p>
                <div className="mt-8 text-center">
                    <img src={data.avatar_url} alt="avatar" className="mx-auto w-32 h-32 rounded-full" />
                    <h2 className="text-xl font-semibold mt-4">{data.name}</h2>
                    <p className="text-gray-500">@{data.login}</p>
                    <p className="mt-2 text-gray-700">{data.bio}</p>
                    <div className="mt-4 space-x-4">
                        <span> Repos: {data.public_repos}</span>
                        <span> Followers: {data.followers}</span>
                        <span> Following: {data.following}</span>
                    </div>
                    <Link 
                        href={data.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                    >
                        View GitHub Profile
                    </Link>
                </div>
        </div>
    );
}