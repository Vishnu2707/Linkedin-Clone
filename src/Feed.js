import React, { useEffect, useState} from 'react';
import "./Feed.css";
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                    //used to fetch the id and data from database(docs,collections)
                }
            )))
        ))
    },[])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Abhinav Sujeesh",
            description: 'Just a test',
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            //using server timestamp for a common timestamp.
        });
        
        setInput("");
        //Pushing the data into db after hitting the send button.
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
            </div>
            {posts.map(({ id, data:{ name, description, message, photoUrl }}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
        
    )
}

export default Feed
