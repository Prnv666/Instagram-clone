import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = ({user, postImage, likes, comments, timeStamp}) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-author">
          <Avatar className="avatar">{user.charAt(0).toUpperCase()}</Avatar>
          {user} . <span style={{cursor:"pointer"}}>{timeStamp}</span>
        </div>
        <MoreHorizIcon style={{cursor:"pointer"}}/>
      </div>
      <div className="post-image">
        <img
          src={postImage}
          alt=""
        />
      </div>
      <div className="post-footer">
        <div className="post-footer-icons">
          <div className="post-icons-main">
            <FavoriteBorderIcon className="post-icon" />
            <ChatBubbleOutlineIcon className="post-icon" />
            <SendIcon className="post-icon" />
          </div>

          <div className="post-icon-save">
            <BookmarkBorderIcon />
          </div>
        </div>
        <div className="likes">
          Liked By {/* {"Mutual friend"}  */}
          <span style={{ fontWeight: "bold", cursor:"pointer" }}>{user}</span> & <span style={{fontWeight:"bold", cursor:"pointer"}}>{likes}</span>  others
        </div>
        <div className="comments">
            view All <span style={{fontWeight:"bold"}}>{comments}</span> Comments 
        </div>
        <div className="add-comment">
            <input type="text" placeholder="Add Comment . . . ." />
        </div>
      </div>
    </div>
  );
};

export default Post;
