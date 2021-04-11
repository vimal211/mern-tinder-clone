import React from 'react';
import Chat from './chat';
import './chats.css'

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Deepika"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Virat"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Ronaldo"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Samantha"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Johnny"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  )
}

export default Chats