import React, { FC } from "react";

type Event = React.FormEvent<HTMLFormElement>;

interface Login {
  handleLoginSubmit?: (event: Event) => React.ReactNode;
}

const Login: FC<Login> = () => {
  const handleLoginSubmit = (_event: Event) => {
    console.log("Firing");
  };

  return (
    <form data-testid="form" onSubmit={event => handleLoginSubmit(event)}>
      <input data-testid="email" />
      <input data-testid="password" />
      <button data-testid="login-button">login</button>
    </form>
  );
};

export default Login;
