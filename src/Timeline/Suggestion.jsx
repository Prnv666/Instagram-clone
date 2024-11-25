import React, { useState } from "react";
import "./Suggestion.css";
import { Avatar } from "@mui/material";

const Suggestion = ({ sugUserName, sugRelation, sugImage }) => {
  return (
    <div className="Suggestion">
      <div className="suggestion-user-names">
        <div className="suggestion-user-name">
          <div className="username-left">
            <span className="avatar">
              <Avatar
                style={{ backgroundSize: "center", backgroundImage: "cover" }}
                src={sugImage}
              />
            </span>
            <div className="username-info">
              <span className="useername">{sugUserName}</span>
              <span className="user-relation">{sugRelation}</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
