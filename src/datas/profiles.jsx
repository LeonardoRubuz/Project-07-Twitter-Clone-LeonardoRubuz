import cnn from "/images/tweet-profile-photo.png"
import image from '/images/profile-photo.png';
import times from "/images/ny-times.png";
import twitter from "/images/twitter.png";

export const usersProfiles = [
    {
        avatar : cnn,
        accountName :"CNN" ,
        username :"CNN" ,
        bio : "It's our job to #GoThere & tell the most difficult stories. For breaking news, follow @CNNBRK and download our app.cnn.com/apps",
        links : {
            location : "",
            website : "cnn.com"
        },
        join_date : "2007",
        following : 1086,
        followers : 6000000
    },
    {
        avatar : times,
        accountName :"The New York Times" ,
        username :"nytimes" ,
        bio : "News tips? Share them here: http://nyti.ms/2FVHq9v",
        links : {
            location : "New York City, USA",
            website : "nytimes.com"
        },
        join_date : "2007",
        following : 876,
        followers : 55100000
    },
    {
        avatar : twitter,
        accountName :"Twitter" ,
        username :"twitter" ,
        bio : "what's happening!?",
        links : {
            location: "everywhere",
            website : "about.x.com"
        },
        join_date : "2007",
        following : 0,
        followers : 6730000
    },
    {
        avatar : image,
        accountName :"Leonardo" ,
        username :"rbmachine" ,
        bio : "hey",
        links : {},
        join_date : "2017",
        following : 130,
        followers : 27
    }
]

//user = usersProfiles.find(element => element.username = "leonardo")