import { useContext, useState } from "react";
import { useForm } from 'react-hook-form'
import media from "../../public/svg/Media.svg";
import emoji from "../../public/svg/Emoji.svg";
import gif from "../../public/svg/Gif.svg";
import poll from "../../public/svg/Poll.svg";
import schedule from "../../public/svg/Schedule.svg";
import { UserContext } from "../contexts/UserContext";
import { addTweet } from "../api/apiRequests";
import { TweetsContext } from "../contexts/TweetsContext";

function InnerEditor() {
    const currentUser = useContext(UserContext)
    const tweetListLength = useContext(TweetsContext).length
    const { register, handleSubmit, formState : {errors} } = useForm()
    function onFormSubmit(data, event) {
        // create a new tweet object
        const newTweet = {
            id : tweetListLength+1,
            avatar : currentUser.avatar,
            author : currentUser.accountName,
            username : currentUser.username,
            date : "Now",
            content : data.tweetInput,
            image : null,
            likesNumber : 0,
            commentsNumber : 0,
            retweetsNumber : 0,
            isLiked : false,
            isRetweeted : false
        }
        addTweet(newTweet)
        console.log(newTweet);
        event.target.reset()
        event.preventDefault()
    };
    return ( 
        <form action="" className="tweet-editor-form" onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" className="tweet-editor-input" placeholder="What's happening?" 
                {...register("tweetInput",{
                    required : "Ce champ est obligatoire",
                    maxLength : {value : 180, message : "Le tweet ne peut comprendre que 180 caractères"}
                })}
            
            />
            <p>{errors.tweetInput?.message}</p>
            <div className="tweet-editor-buttons">
                <div className="tweet-editor-actions">
                    <button><img src={media} alt="" /></button>
                    <button><img src={gif} alt="" /></button>
                    <button><img src={poll} alt="" /></button>
                    <button><img src={emoji} alt="" /></button>
                    <button><img src={schedule} alt="" /></button>
                </div>
                <button className="button" type="submit">Tweet</button>
            </div>
        </form>
     );
}

export default InnerEditor;