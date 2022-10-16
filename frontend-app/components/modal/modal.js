import React, { useState } from "react";
import axios from "axios";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const addTodo = async () => {
      const result = await axios.post("http://localhost:1337/api/reviews", {
          "data": {
            "shopId": "1",
            "review": "test - shop ID 1",
            "username": "test user",
            "score": "4"
          }
      });
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Review
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <form action="send-data" method="post">
                <label className="text-session" for="comment">Comment: </label>
                <input type="text" id="comment" name="comment" />
                <div></div>
                <label className="text-session" for="username">Username: </label>
                <input type="text" id="username" name="username" />
              </form>
              <button onClick={addTodo} className="close-modal">
                Summit
              </button>
              <button onClick={toggleModal} className="close-modal">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
  console.log(username);
}
