import React from "react";
import { RouteComponentProps } from "@reach/router";

const Login = (props: RouteComponentProps) => {
  return (
    <div className="data-form">
      <form>
        <h1>Log in</h1>

        <input type="email" />
        <input type="password" />
        <a href="" className="btn">
          Log in
        </a>
      </form>
    </div>
  );
***REMOVED***

export default Login;
