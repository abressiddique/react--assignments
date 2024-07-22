import { useEffect, useState } from "react";
import User from "./user";
import './styles.css';

export default function GithubProfileFinder() {
    const [username, setUsername] = useState('abressiddique');
    const [userdata,setUserdata]=useState(null);
    const[loading,setloading]=useState(true);

    async function fetchGitHubUserData() {
        setloading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        if(data){
            setUserdata(data);
            setloading(false);
            setusename('empty');
        }
    }

    function handleSubmit() {
        fetchGitHubUserData();
    }

    useEffect(() => {
        fetchGitHubUserData();
    }, []);
    if(loading){
        return <h1>loading data please </h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            { userdata !== null ?<User user={userdata}></User>:ull
            }
        </div>
    );
}
