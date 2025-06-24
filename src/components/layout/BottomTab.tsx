import Home from "../../assets/icons/home.svg?react";
import Profile from "../../assets/icons/profile.svg?react";

import { NavButton } from "./NavButton";

export default function BottomTab() {
  return (
    <div className="fixed bottom-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <NavButton label="Home" icon={<Home />} />
        <NavButton label="Ride History" icon={<Profile />} />
        <NavButton label="Ride Offer" icon={<Profile />} />
        <NavButton label="Profile" icon={<Profile />} />
      </div>
    </div>
  );
}
