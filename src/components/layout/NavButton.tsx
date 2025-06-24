import type { ReactNode } from "react";

export const NavButton = ({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) => {
  return (
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      {icon}
      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-blue-500">
        {label}
      </span>
    </button>
  );
};
