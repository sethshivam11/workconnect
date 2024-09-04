import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailSchema,
  passwordSchema,
  usernameSchema,
} from "@/schema/userSchema";
import { login } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formSchema = z.object({
    identifier: emailSchema.or(usernameSchema),
    password: passwordSchema,
  });
  const [showPwd, setShowPwd] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  function onSubmit(data) {
    dispatch(login(data));
    navigate("/");
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen relative">
      <div className="flex max-md:absolute flex-col items-center justify-center max-lg:px-2 w-full h-full relative">
        <div className="flex gap-2 items- justify-center flex-col text-white aspect-video bg-transparent/20 lg:w-3/4 max-lg:mx-2 w-full max-md:hidden z-10 backdrop-blur p-8 rounded-xl">
          <h1 className="font-extrabold tracking-tighter text-4xl"> Connect</h1>
          <h1 className="font-extrabold tracking-tighter text-4xl">
            Collaborate
          </h1>
          <h1 className="font-extrabold tracking-tighter text-4xl text-neutral-900">
            &gt; Succeed
          </h1>
          <p className="text-lg font-semibold tracking-tight">
            Welcome to <span className="text-sky-400 font-galindo">Work</span>
            Connect - Simplify Your Freelancing Journey
          </p>
        </div>
        <img
          src="/login.jpg"
          alt=""
          className="w-full h-full absolute object-cover pointer-events-none select-none transition-transform"
        />
      </div>
      <div className="flex items-center justify-center max-sm:px-2 z-10 sm:pt-24 pt-20 pb-4">
        <Card className="2xl:w-1/2 xl:w-2/3 md:mx-5 md:w-full sm:w-4/5 w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={form.control}
                  name="identifier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email / Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email or Username"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="flex gap-2">
                        <FormControl>
                          <Input
                            placeholder="Your Password"
                            type={showPwd ? "text" : "password"}
                            autoComplete="current-password"
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="px-2"
                          onClick={() => setShowPwd((pwd) => !pwd)}
                        >
                          {showPwd ? <Eye /> : <EyeOff />}
                        </Button>
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button type="submit">Login</Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?&nbsp;
              <Link to="/signup" className="underline text-sky-500">
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
