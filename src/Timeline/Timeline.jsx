import React, { useState } from "react";
import "./Timeline.css";
import Suggestion from "./Suggestion";
import Post from "./Posts/Post";

const Timeline = () => {
  const [posts, setPost] = useState([
    {
      user: "Pranav",
      postImage:
        "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.jpg?s=1024x1024&w=is&k=20&c=PhlH8J6fq8OjC67fvza6GLCqot3VCsm-YbOv14_CAfc=",
      likes: 12,
      timeStamp: "2d",
      comments: 7
    },
    {
      user: "Papa_ki_Pari",
      postImage:
        "https://images.unsplash.com/photo-1533618561606-3b2a0766d159?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 300000,
      timeStamp: "2hr",
      comments: 1421
    },
    {
      user: "Akash",
      postImage:
        "https://images.unsplash.com/photo-1703837543381-5545225438a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 129,
      timeStamp: "2h",
      comments: 69
    },
    {
      user: "Pratik",
      postImage:
        "https://media.istockphoto.com/id/1432660477/photo/cloud-computing-technology-big-data-concept.jpg?s=2048x2048&w=is&k=20&c=EgJOO2ljOASGZB8m6wAYpIiGnsLee97BJ0wlBTxkmtE=",
      likes: 1000,
      timeStamp: "10min",
      comments: 301
    },
    {
      user: "Angle_Priya",
      postImage:
        "https://images.unsplash.com/photo-1499229694635-fc626e0d9c01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 300000,
      timeStamp: "2hr",
      comments: 2000
    },
  ]);

  const [suggestions, setSuggestions] = useState([
    {
      sugUserName : "Riya",
      sugRelation : "You may Know her",
      sugImage : "https://images.unsplash.com/photo-1731641904795-2873e1da5ac1?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
    },
    {
      sugUserName : "Tejas",
      sugRelation : "From Your Contacts",
      sugImage : "https://plus.unsplash.com/premium_photo-1730828574006-6cc51c904b31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      sugUserName : "Ashwil",
      sugRelation : "From Your Contacts",
      sugImage : "https://plus.unsplash.com/premium_photo-1727539364539-c382852a87c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      sugUserName : "Pooja",
      sugRelation : "Your Sister",
      sugImage : "https://images.unsplash.com/photo-1732203363655-dda8834440ef?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      sugUserName : "Mayur",
      sugRelation : "Your Brother",
      sugImage : "https://plus.unsplash.com/premium_photo-1682096246950-fb9c9ace1d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline-left">
        <div className="timeline-post">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timeStamp={post.timeStamp}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
      <div className="timeline-right">
      <div className="suggestion-title">Suggested for You</div>
      {suggestions.map((suggestion) => (
            <Suggestion
            sugUserName={suggestion.sugUserName}
            sugRelation={suggestion.sugRelation}
            sugImage={suggestion.sugImage}
            />
          ))}        
      </div>
    </div>
  );
};

export default Timeline;
