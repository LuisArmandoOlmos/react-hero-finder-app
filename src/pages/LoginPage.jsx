import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <hr />

      <button onClick={onLogin}>Login</button>
    </div>
  );
};
