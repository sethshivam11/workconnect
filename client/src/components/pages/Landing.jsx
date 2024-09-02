import React from "react";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  ChevronRight,
  Code2,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Landing() {
  const containerRef = React.useRef(null);

  function handleScroll(direction) {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollWidth = container.children[0].clientWidth;
    if (direction === "left") {
      containerRef.current.scrollBy({
        left: scrollWidth,
        behavior: "smooth",
      });
    } else {
      containerRef.current.scrollBy({
        left: -scrollWidth,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section className="flex max-md:flex-col items-center justify-center w-full min-h-screen">
        <div className="flex flex-col gap-4 md:w-1/2 w-3/4 max-md:pt-40 max-md:min-h-96">
          <h1 className="xl:text-8xl lg:text-7xl sm:text-6xl text-5xl tracking-tight font-semibold lg:text-shadow-lg text-shadow shadow-[gray]">
            Hire the best <br />
            <span className="text-sky-400">talents&nbsp;</span>
            out there!
          </h1>
          <p className="font-light text-lg">
            Bring your project to life with our network of skilled freelancers.
            Whether you need web development, design, writing, or marketing, we
            connect you with the right talent, fast and securely.
          </p>
          <div className="flex max-sm:flex-col gap-4">
            <Link to="/freelancers">
              <Button size="lg" className="text-lg py-6 max-sm:w-full">
                Hire Freelancer
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-800 text-lg py-6 max-sm:w-full"
              >
                Find Projects
              </Button>
            </Link>
          </div>
        </div>
        <img
          src="/student.png"
          alt=""
          className="md:w-1/3 sm:w-1/2 w-2/3 pointer-events-none select-none"
        />
      </section>
      <section className="flex flex-col gap-6 items-center justify-center w-full bg-neutral-100 lg:px-12 px-6 pb-6">
        <h1 className="text-4xl tracking-tight font-bold mt-10">
          Why Choose Us?
        </h1>
        <div className="flex max-md:flex-col items-center justify-center">
          <img
            src="/expert.png"
            alt=""
            className="md:w-1/3 w-1/2 pointer-events-none select-none"
          />
          <div className="lg:text-lg lg:w-1/2 md:w-full sm:w-5/6 w-full">
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
        <div className="flex max-md:flex-col-reverse items-center justify-center">
          <div className="lg:text-lg lg:w-1/2 md:w-full sm:w-5/6 w-full">
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
            className="md:w-1/3 w-1/2 pointer-events-none select-none"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full lg:px-12 px-6 relative">
        <div className="flex items-center justify-between lg:w-5/6 w-full">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl tracking-tight flex items-center gap-2 font-bold my-10">
            Search for Projects
            <ArrowRight size="30" strokeWidth={2.5} className="max-md:hidden" />
            <ArrowRight size="20" strokeWidth={2.5} className="md:hidden" />
          </h1>
          <Link
            to="/projects"
            className="hover:underline underline-offset-2 text-sky-400 md:text-lg"
          >
            View All
          </Link>
        </div>
        <div
          className="flex gap-2 lg:w-5/6 w-full overflow-x-auto snap-x mb-4 scrollbar pb-0.5 relative group"
          ref={containerRef}
        >
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Code2 size="150" className="mb-4 max-lg:hidden" />
            <Code2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Code2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Coding
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <BadgeIndianRupee size="150" className="mb-4 max-lg:hidden" />
            <BadgeIndianRupee
              size="100"
              className="mb-2 lg:hidden max-sm:hidden"
            />
            <BadgeIndianRupee size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Finance
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <HeartPulse size="150" className="mb-4 max-lg:hidden" />
            <HeartPulse size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <HeartPulse size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Healthcare
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Building2 size="150" className="mb-4 max-lg:hidden" />
            <Building2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Building2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Business
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Code2 size="150" className="mb-4 max-lg:hidden" />
            <Code2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Code2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Coding
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Code2 size="150" className="mb-4 max-lg:hidden" />
            <Code2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Code2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Coding
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Code2 size="150" className="mb-4 max-lg:hidden" />
            <Code2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Code2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Coding
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Code2 size="150" className="mb-4 max-lg:hidden" />
            <Code2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Code2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Coding
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Code2 size="150" className="mb-4 max-lg:hidden" />
            <Code2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Code2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Coding
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Code2 size="150" className="mb-4 max-lg:hidden" />
            <Code2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Code2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Coding
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
          <div className="snap-start border rounded-xl flex flex-col items-center justify-center lg:p-8 md:p-6 p-4 max-lg:min-w-48 max-sm:min-w-40">
            <Code2 size="150" className="mb-4 max-lg:hidden" />
            <Code2 size="100" className="mb-2 lg:hidden max-sm:hidden" />
            <Code2 size="80" className="sm:hidden" />
            <h2 className="sm:text-2xl text-xl tracking-tight font-bold">
              Coding
            </h2>
            <p className="text-neutral-500">Lorem, ipsum.</p>
          </div>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="absolute left-20 max-lg:hidden top-1/2 -translate-y-1/2"
          onClick={() => handleScroll("right")}
        >
          <ArrowLeft size="30" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="absolute right-20 max-lg:hidden top-1/2 -translate-y-1/2"
          onClick={() => handleScroll("left")}
        >
          <ArrowRight size="30" />
        </Button>
      </section>
      <section className="flex flex-col items-center justify-center w-full px-12">
        <h1 className="lg:text-4xl md:text-3xl text-2xl tracking-tight font-bold my-2">FAQs</h1>
        <Accordion type="single" collapsible className="md:w-5/6 w-full mb-10">
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
