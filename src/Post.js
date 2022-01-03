import React from 'react';
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';
import SentimentDissatisfiedSharpIcon from '@material-ui/icons/SentimentDissatisfiedSharp';
import "./Post.css";

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div> 
            <div className="post__body">
                <p>{message}</p>
            </div>  
            <div className="post__buttons"> 
                <InputOption Icon={EmojiEmotionsSharpIcon} title="Happy" color="gray" />
                <InputOption Icon={SentimentDissatisfiedSharpIcon} title="Sad" color="gray" />
            </div>         
        </div>
    )
}

export default Post
