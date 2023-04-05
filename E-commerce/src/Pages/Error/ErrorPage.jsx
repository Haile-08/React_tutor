import React from "react";
import { useRouteError } from "react-router-dom";
import errorImage from "../../assets/Error.svg";
import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <h1>Opps!</h1>
      <img src={errorImage} alt="error" />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
