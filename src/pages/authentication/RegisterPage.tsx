import { Link } from "react-router";

export default function RegisterPage() {
  return (
    <div className="flex flex-col w-100">
      <div className="text-center pb-5">
        <h2 className="font-bold text-2xl">Sign Up</h2>
      </div>

      <div className="flex flex-row justify-between pt-5">
        <Link to="/register">Login instead</Link>
      </div>
    </div>
  );
}
