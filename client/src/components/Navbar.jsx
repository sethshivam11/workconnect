import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Folder, Home, Plus, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { nameFallback } from "@/lib/helpers";

function Navbar() {
  const location = useLocation();
  const userSelector = useSelector((state) => state.user);

  return (
    <>
      <nav className="flex max-sm:flex-col items-center justify-around w-full h-20 max-sm:h-16 border-b-2 z-50 sticky top-0 sm:backdrop-blur-sm sm:-mb-20 -mb-16">
        <div className="flex items-center sm:justify-center justify-between max-sm:min-h-16 max-sm:w-full max-sm:px-6 max-sm:z-40 max-sm:border-b-2 max-sm:backdrop-blur-sm">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter">
            <span className="text-sky-400 font-galindo sm:mr-1 mr-0.5">
              Work
            </span>
            Connect
          </Link>
        </div>
        <div className="sm:flex hidden max-sm:flex-col gap-3 items-center justify-center">
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
          {userSelector?.isLoggedIn ? (
            <>
              <Button>Post a project</Button>
              <Link to="/profile">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>
                    {nameFallback(userSelector?.user?.identifier)}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={
                  location.pathname === "/signup" ||
                  location.pathname === "/login"
                    ? "invisible"
                    : "visible"
                }
              >
                <Button>Login</Button>
              </Link>
              <Link
                to="/signup"
                className={
                  location.pathname === "/signup" ||
                  location.pathname === "/login"
                    ? "invisible"
                    : "visible"
                }
              >
                <Button variant="outline" className="border-neutral-800">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
      <nav className="flex sm:hidden items-center justify-around z-50 fixed border-t-2 w-full h-14 bottom-0 left-0 bg-white">
        <button>
          <Home />
        </button>
        <button>
          <Folder />
        </button>
        <button>
          <Plus />
        </button>
        <button>
          <Users />
        </button>
        <button>
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png" />
            <AvatarFallback>{nameFallback("blaise")}</AvatarFallback>
          </Avatar>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
