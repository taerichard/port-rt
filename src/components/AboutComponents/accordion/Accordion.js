import React, { useState } from "react";
import "../styles/accordion.css";

//https://medium.com/hackernoon/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiZDY4NWY1ZThmYzYyZDc1ODcwNWMxZWIwZThhNzUyNGM0NzU5NzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NTc2MTM1MzQsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNDM5NjI3MTAxMzM4NDAxMTExNiIsImVtYWlsIjoidGFlcmljaGFyZEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IlJpY2hhcmQgVGFlIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FJdGJ2bWx6Tl9Md2hUQXJOYUEtV3Z5Vm5GZWJzdXFzb1JxRVpVQVdnZTZFPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlJpY2hhcmQiLCJmYW1pbHlfbmFtZSI6IlRhZSIsImlhdCI6MTY1NzYxMzgzNCwiZXhwIjoxNjU3NjE3NDM0LCJqdGkiOiJjY2VkZGQ2NzdkYmY4NmMwN2ZjYWFlMGYyZTZhNzZlZDA2ZDgzZmM4In0.KRU7HrO1Cj1zLQ2GymFgM0epxa8AXB49nQNVGRXEb2P76fgk51gBCRTjBTZQ623plUz5hXroDzmzljzzVALgD2rGI6UG2YXD4tqfqdD2g3ykyxHmEQCzJhXpZI0hmf93VmeYgBweICzp7Ek7zICrJzygQlZWQnh1NwIrZ88r4zY7DOu8drnbFpwge6DGyI_ODWBgDMVCAIWSVCqdMciekrLgPtroDqzcLYEGRscsTSwdUyIN_QYIEWfCoYLOCiuj6Rw7gs7O4Sr6wU_LBqL8heYLUDAAFEPZRXyjLJHUqS6yyJ-WNDbJfDUNqsA0bSWoDfqWlNM8ujAZv08cPdQlmA

const Accordion = ({ title, content, number }) => {
  const [isActive, setIsActive] = useState(false);
  const minusSign = <span className="flat-line"></span>;
  const plusSIgn = <span className="flat-line"></span>;

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-title-container">
          <h4>{title}</h4>
        </div>
        <div className="accordion-button-container">
          {/* <span>{isActive ? "-" : "+"}</span> */}
          <span>{isActive ? minusSign : plusSIgn}</span>
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
