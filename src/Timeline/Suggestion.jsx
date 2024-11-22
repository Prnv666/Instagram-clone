import React from "react";
import "./Suggestion.css";
import { Avatar } from "@mui/material";

const Suggestion = () => {
  return (
    <div className="Suggestion">
      <div className="suggestion-title">Suggested for You</div>
      <div className="suggestion-user-names">
        <div className="suggestion-user-name">
          <div className="username-left">
            <span className="avatar">
              <Avatar>P</Avatar>
            </span>
            <div className="username-info">
              <span className="useername">User_Name</span> 
              <span className="user-relation">You May Know User</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
        <div className="suggestion-user-name">
          <div className="username-left">
            <span className="avatar">
              <Avatar>P</Avatar>
            </span>
            <div className="username-info">
              <span className="useername">User_Name</span> 
              <span className="user-relation">You May Know User</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
        <div className="suggestion-user-name">
          <div className="username-left">
            <span className="avatar">
              <Avatar>P</Avatar>
            </span>
            <div className="username-info">
              <span className="useername">User_Name</span> 
              <span className="user-relation">You May Know User</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
        <div className="suggestion-user-name">
          <div className="username-left">
            <span className="avatar">
              <Avatar>P</Avatar>
            </span>
            <div className="username-info">
              <span className="username">User_Name</span> 
              <span className="user-relation">You May Know User</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
        <div className="suggestion-user-name">
          <div className="username-left">
            <span className="avatar">
              <Avatar>P</Avatar>
            </span>
            <div className="username-info">
              <span className="useername">User_Name</span> 
              <span className="user-relation">You May Know User</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
