import React, { useState } from "react";
import axios from "axios";

export default function Modal({ shopId }) {
  const [modal, setModal] = useState(false);
  console.log(shopId);

  const toggleModal = (shopId) => {
    setModal(!modal);
  };

  const addTodo = async (shopId, username, comment, score) => {
    const result = await axios.post("http://localhost:1337/api/reviews", {
      data: {
        shopId: shopId,
        review: comment,
        username: username,
        score: score
      },
    });
    setModal(!modal);
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
                <label className="text-session" for="comment">
                  Comment:{" "}
                </label>
                <input type="text" id="comment" name="comment" />
                <div></div>
                <label className="text-session" for="username">
                  Username:{" "}
                </label>{" "}
                <input type="text" id="username" />
                <div></div>
                <label className="text-session" for="score">
                  score:{" "}
                </label>{" "}
                <input type="text" id="score" />
              </form>
              <button
                onClick={() => {
                  addTodo(
                    shopId,
                    username.value,
                    comment.value,
                    score.value
                  );
                }}
                className="close-modal"
              >
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
}
