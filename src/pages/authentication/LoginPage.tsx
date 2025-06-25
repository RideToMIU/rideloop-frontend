import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-100">
      <div className="text-center pb-5">
        <h2 className="font-bold text-2xl">Login</h2>
      </div>

      <div className="flex flex-row justify-between pt-5">
        <Link to="/register">Sign up</Link>
        <Link to="/register">Forgot password</Link>
      </div>
    </div>
  );
}
