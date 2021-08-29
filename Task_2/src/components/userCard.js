import React from "react";
import "./style.css";
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div class="column">
            <div class="image">
              <img src={user.avatar} alt=""></img>
              <div class="details">
                <h2>
                  {user.first_name}
                  <span>{user.last_name}</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  rerum id animi ab illum incidunt quasi.
                </p>
                <div class="more">
                  <a href="mailto:webmaster@example.com" class="read-more">
                    {user.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
