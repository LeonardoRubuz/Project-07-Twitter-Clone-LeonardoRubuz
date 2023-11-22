import cnn from '../images/tweet-profile-photo.png';
import image from '../images/tweet-image.png';
import times from "../images/ny-times.png";
import twitter from "../images/twitter.png";

const datas = [
    {
        id  : 1 ,
        avatar : {cnn},
        author : "CNN",
        username : "CNN",
        date : "2m",
        content : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a \"major breakthrough\" that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        image : null,
    },
    {
        id  : 2 ,
        avatar : {times},
        author : "The New York Times",
        username : "nytimes",
        date : "2h",
        content : "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        image : {image},
    },
    {
        id  : 3 ,
        avatar : {twitter},
        author : "Twitter",
        username : "Twitter",
        date : "Oct 29",
        content : "BIG NEWS lol jk still Twitter",
        image : null,
    },
    {
        id  : 4 ,
        avatar : {twitter},
        author : "Twitter",
        username : "Twitter",
        date : "Oct 4",
        content : "hello literally everyone",
        image : null,
    },
    {
        id  : 5 ,
        avatar : {twitter},
        author : "Twitter",
        username : "Twitter",
        date : "Oct 4",
        content : "hello literally everyone",
        image : {image},
    }
]