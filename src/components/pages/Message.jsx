import React from "react";
import "./message.css";

export default function Message() {
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
        </div>
      </div>

      <div className="chatBox">
        <div className="chatBoxWrapper">chat</div>
      </div>

      <div className="chatOnline">
        <div className="chatOnlineWrapper">online</div>
      </div>
    </div>
  );
}
