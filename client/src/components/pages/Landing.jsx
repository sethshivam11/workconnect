import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, BadgeIndianRupee, Building2, Code2, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full container">
      <section className="flex items-center justify-center w-full min-h-screen">
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-8xl tracking-tight font-semibold text-shadow-landing shadow-[gray]">
            Hire the best <br />
            <span className="text-sky-400">talents&nbsp;</span>
            out there!
          </h1>
          <p className="font-light text-lg">
            Bring your project to life with our network of skilled freelancers.
            Whether you need web development, design, writing, or marketing, we
            connect you with the right talent, fast and securely.
          </p>
          <div className="flex gap-4">
            <Link to="/freelancers">
              <Button size="lg" className="text-lg py-6">
                Hire Freelancer
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-800 text-lg py-6"
              >
                Find Projects
              </Button>
            </Link>
          </div>
        </div>
        <img
          src="/student.png"
          alt=""
          className="w-1/3 pointer-events-none select-none"
        />
      </section>
      <section className="flex flex-col items-center justify-center w-full bg-neutral-100 px-12">
        <h1 className="text-4xl tracking-tight font-bold my-10">
          Why Choose Us?
        </h1>
        <div className="flex items-center justify-center">
          <img
            src="/expert.png"
            alt=""
            className="w-1/3 pointer-events-none select-none"
          />
          <div className="text-lg w-1/2">
            <h2 className="font-bold inline">Expert Freelancers:&nbsp;</h2>
            <p className="font-light inline">
              Our platform is home to a vibrant community of verified
              professionals, each bringing a wealth of experience and
              specialized skills to the table. Whether you need a creative
              designer, a meticulous writer, a savvy marketer, or a cutting-edge
              developer, you can trust that every freelancer in our network has
              been carefully vetted for quality and expertise. Driven by passion
              and a commitment to excellence, our freelancers are dedicated to
              delivering outstanding results tailored to your specific needs and
              goals.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-lg w-1/2">
            <h2 className="font-bold inline">Flexible Pricing:&nbsp;</h2>
            <p className="font-light inline">
              We understand that every project is unique, and so is your budget.
              Our platform offers a wide range of pricing options to match your
              financial needs, whether you're looking for a freelancer to handle
              a quick task or manage a comprehensive, long-term project. You
              have the freedom to choose from competitive rates, negotiate
              terms, and find the right talent that fits perfectly within your
              budget. With transparent pricing and no hidden fees, you can be
              confident that you're getting the best value for your investment.
            </p>
          </div>
          <img
            src="/pricing.png"
            alt=""
            className="w-1/3 pointer-events-none select-none"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full px-12">
        <div className="flex items-center justify-between w-5/6">
          <h1 className="text-4xl tracking-tight font-bold my-10">
            Search for Projects
            <ArrowRight className="inline mx-1" size="30" strokeWidth={2.5} />
          </h1>
          <Link
            to="/projects"
            className="hover:underline underline-offset-2 text-sky-400 text-lg"
          >
            View All
          </Link>
        </div>
        <div className="flex gap-2 w-5/6 overflow-auto snap-x mb-4 scrollbar pb-0.5">
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Code2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Coding</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <BadgeIndianRupee size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Finance</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <HeartPulse size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Healthcare</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Building2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Business</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Code2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Coding</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Code2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Coding</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Code2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Coding</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Code2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Coding</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Code2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Coding</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Code2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Coding</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center p-8">
            <Code2 size="150" className="mb-4" />
            <h2 className="text-2xl tracking-tight font-bold">Coding</h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full px-12">
        <h1 className="text-4xl tracking-tight font-bold my-2">FAQs</h1>
        <Accordion type="single" collapsible className="w-5/6 mb-10">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

export default Landing;
