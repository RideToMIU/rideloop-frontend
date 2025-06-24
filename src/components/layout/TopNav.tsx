export default function TopNav() {
  return (
    <nav className="fixed top-0 navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          RideLoop
        </a>
      </div>
      <div className="badge badge-ghost">
        <svg
          className="size-[1em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></circle>
            <path
              d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <circle
              cx="12"
              cy="7.25"
              r="1.25"
              fill="currentColor"
              strokeWidth="2"
            ></circle>
          </g>
        </svg>
        Guide
      </div>
    </nav>
  );
}
