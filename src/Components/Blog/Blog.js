import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h1>Question 1 : What is the purpose of react router ?</h1>
        <div>
          <h2>
            Ans : React Router is a standard library for routing in React. It
            enables the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </h2>
        </div>
      </div>
      <div>
        <h1>Question 1 : How does context api work ?</h1>
        <div>
          <h2>
            Ans : The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </h2>
        </div>
      </div>
      <div>
        <h1>Question 1 : What is React useRef hook ?</h1>
        <div>
          <h2>
            Ans : The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a
            re-render when updated. It can be used to access a DOM element
            directly.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
