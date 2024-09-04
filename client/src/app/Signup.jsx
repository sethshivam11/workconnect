import React from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  categorySchema,
  dobSchema,
  emailSchema,
  fullNameSchema,
  genderSchema,
  passwordSchema,
  usernameSchema,
} from "@/schema/userSchema";
import { useDispatch } from "react-redux";
import { signup } from "@/store/slices/userSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formSchema = z
    .object({
      username: usernameSchema,
      email: emailSchema,
      password: passwordSchema,
      confirmPassword: passwordSchema,
      fullName: fullNameSchema,
      dob: dobSchema,
      category: categorySchema,
      gender: genderSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  const [showPwd, setShowPwd] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      category: "freelancer",
      fullName: "",
      dob: "",
      gender: "",
    },
  });

  function onSubmit(data) {
    dispatch(signup(data));
    navigate("/");
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full relative">
      <div className="flex max-md:absolute flex-col items-center justify-center max-lg:px-2 min-h-screen h-full w-full relative">
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
          className="h-full left-0 top-0 absolute object-cover pointer-events-none select-none"
        />
      </div>
      <div className="flex items-center justify-center max-md:px-2 z-20 md:pt-24 pt-20 pb-4">
        <Card className="2xl:w-1/2 xl:w-2/3 md:mx-5 md:w-full sm:w-4/5 w-full h-fit">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="name"
                          placeholder="Full Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="text"
                          placeholder="Unique Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="bday"
                          inputMode="numeric"
                          type="date"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="email"
                          inputMode="email"
                          placeholder="shadcn"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <div className="flex justify-around">
                          <FormItem className="flex items-center space-x-1 space-y-0">
                            <FormControl>
                              <Input
                                type="radio"
                                value="male"
                                name={field.name}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1 space-y-0">
                            <FormControl>
                              <Input
                                type="radio"
                                value="female"
                                name={field.name}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Female
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1 space-y-0">
                            <FormControl>
                              <Input
                                type="radio"
                                value="others"
                                name={field.name}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Others
                            </FormLabel>
                          </FormItem>
                        </div>
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
                      <div className="flex w-full items-center space-x-2">
                        <FormControl>
                          <Input
                            autoComplete="new-password"
                            type={showPwd ? "text" : "password"}
                            placeholder="shadcn"
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          className="px-2"
                          onClick={() => setShowPwd((pwd) => !pwd)}
                        >
                          {showPwd ? <Eye size="20" /> : <EyeOff size="20" />}
                        </Button>
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <div className="flex w-full items-center space-x-2">
                        <FormControl>
                          <Input
                            autoComplete="new-password"
                            type={showPwd ? "text" : "password"}
                            placeholder="shadcn"
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          className="px-2"
                          onClick={() => setShowPwd((pwd) => !pwd)}
                        >
                          {showPwd ? <Eye size="20" /> : <EyeOff size="20" />}
                        </Button>
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <Button type="submit">Sign Up</Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Already have an account?&nbsp;
              <Link to="/login" className="underline text-sky-500">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
