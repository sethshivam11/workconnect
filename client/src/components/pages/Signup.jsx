import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Signup() {
  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <div className="flex max-md:absolute flex-col items-center justify-center md:w-1/2 w-full max-lg:px-2 h-screen relative">
        <div className="flex gap-2 items- justify-center flex-col text-white aspect-video bg-transparent/20 lg:w-3/4 max-lg:mx-2 w-full max-md:hidden z-10 backdrop-blur p-8 rounded-xl">
          <h1 className="font-extrabold tracking-tighter text-4xl"> Connect</h1>
          <h1 className="font-extrabold tracking-tighter text-4xl">
            Collaborate
          </h1>
          <h1 className="font-extrabold tracking-tighter text-4xl">
            &gt; Succeed
          </h1>
          <p className="text-lg font-semibold tracking-tight">
            Welcome to <span className="text-sky-400 font-galindo">Work</span>
            Connect - Simplify Your Freelancing Journey
          </p>
        </div>
        <img
          src="/signup.jpg"
          alt=""
          className="w-full h-full absolute object-cover"
        />
      </div>
      <div className="flex items-center justify-center sm:w-1/2 w-full max-sm:px-2 z-10">
        <Card className="lg:w-1/2 md:w-2/3 w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Signup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?&nbsp;
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
