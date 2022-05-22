import {useEffect, useRef, useState} from 'react';

export const Chat = () => {

  const[chat, setChat] = useState({});
  const[chats, setChats] = useState([]);
  const[username, setUserName] = useState("");
  const[message, setMessage] = useState("");
  const[newChat, setNewChat] = useState("");

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      headers: { "Content-Type": "application/json", },
    })
      .then((response) => response.json())
      .then((data) => setChats(data.Items));
  }

  function addMessage() {
    const Message = {
      id: chat.id,
      username: username,
      message: message
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {"Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(Message),
      })
        .then((response) => response.json()) // pull the json out of the response
        .then((data) => console.log(data));
    }

    function addChat() {
      const chat = {
        name: newChat,
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {"Content-Type": "application/json", },
      body: JSON.stringify(chat),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

    function useInterval(callback, delay, ...callbackParams) {
      const savedCallback = useRef();

      // remember the latest callback
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);

      // setup the interval
      useEffect(() => {
        function tick() {
          savedCallback.current(callbackParams);
        }

        if (delay !== null) {
          const id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [callback, delay, callbackParams]);
    }

    useInterval(
      (params) => {
        const chatId = chat.id;
        fetch(
          `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
        )
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.Items);
          });
      },
      1000, // fast polling
      //60000, // slow polling
      chat.id
    );
  }
