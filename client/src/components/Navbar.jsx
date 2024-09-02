import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  return (
    <nav className="flex max-sm:flex-col items-center justify-around w-full h-20 max-sm:h-16 border-b-2 z-10 fixed top-0 left-0 sm:backdrop-blur-sm">
      <div className="flex items-center sm:justify-center justify-between max-sm:min-h-16 max-sm:w-full max-sm:px-6 max-sm:z-20 max-sm:border-b-2 max-sm:backdrop-blur-sm">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter">
          <span className="text-sky-400 font-galindo sm:mr-1 mr-0.5">Work</span>
          Connect
        </Link>
        <Button
          size="icon"
          variant="outline"
          className="sm:hidden"
          onClick={() => setOpenNav((nav) => !nav)}
        >
          <Menu />
        </Button>
      </div>
      <div
        className={`flex max-sm:flex-col sm:gap-3 gap-1 items-center justify-center max-sm:h-52 transition-transform max-sm:backdrop-blur-sm max-sm:w-full ${
          openNav ? "" : "max-sm:-translate-y-80"
        }`}
      >
        <Link to="/projects" className="p-2">
          Projects
        </Link>
        <Link to="/freelancers" className="p-2">
          Freelancers
        </Link>
        <Link to="/chats" className="p-2">
          Chats
        </Link>
        <Link to="/bids" className="p-2">
          Your Bids
        </Link>
      </div>
      <div className="md:flex hidden gap-2">
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/signup">
          <Button variant="outline" className="border-neutral-800">
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
