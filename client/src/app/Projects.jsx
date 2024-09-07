import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bookmark, LocateFixedIcon, Filter, SearchIcon } from "lucide-react";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

function Projects() {
  const navigate = useNavigate();
  const data = [
    {
      title: "Responsive Landing Page Design",
      description:
        "Create a modern and responsive landing page for a marketing campaign.",
      minBudget: 1200,
      maxBudget: 8000,
      bids: 15,
      averageBid: 4500,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      createdAt: new Date("2024-09-01"),
    },
    {
      title: "E-commerce Website Development",
      description:
        "Build a complete e-commerce website with product listings, cart, and checkout functionality.",
      minBudget: 5000,
      maxBudget: 25000,
      bids: 25,
      averageBid: 15000,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      createdAt: new Date("2024-08-28"),
    },
    {
      title: "Single Page Application Development",
      description:
        "Develop a single-page application with dynamic content loading and state management.",
      minBudget: 2000,
      maxBudget: 12000,
      bids: 10,
      averageBid: 7000,
      skills: ["JavaScript", "React", "Redux", "CSS"],
      createdAt: new Date("2024-09-02"),
    },
    {
      title: "Mobile App UI/UX Design",
      description: "Design a mobile app's user interface and user experience.",
      minBudget: 1500,
      maxBudget: 10000,
      bids: 20,
      averageBid: 6000,
      skills: ["Figma", "Adobe XD", "Sketch"],
      createdAt: new Date("2024-08-25"),
    },
    {
      title: "SEO Optimization for Blog",
      description:
        "Improve the SEO ranking of a personal blog to increase traffic and visibility.",
      minBudget: 1000,
      maxBudget: 5000,
      bids: 8,
      averageBid: 3000,
      skills: ["SEO", "Content Writing", "Google Analytics"],
      createdAt: new Date("2024-09-03"),
    },
    {
      title: "WordPress Plugin Development",
      description:
        "Create a custom WordPress plugin for managing user roles and permissions.",
      minBudget: 3000,
      maxBudget: 15000,
      bids: 18,
      averageBid: 9000,
      skills: ["PHP", "WordPress", "JavaScript"],
      createdAt: new Date("2024-09-01"),
    },
    {
      title: "Data Analysis Dashboard",
      description: "Develop a dashboard for data analysis and visualization.",
      minBudget: 5000,
      maxBudget: 20000,
      bids: 30,
      averageBid: 12000,
      skills: ["Python", "Django", "JavaScript", "React", "D3.js"],
      createdAt: new Date("2024-08-30"),
    },
    {
      title: "API Integration for CRM",
      description: "Integrate third-party APIs into an existing CRM system.",
      minBudget: 4000,
      maxBudget: 18000,
      bids: 12,
      averageBid: 8000,
      skills: ["Node.js", "Express", "JavaScript", "RESTful APIs"],
      createdAt: new Date("2024-09-02"),
    },
    {
      title: "Graphic Design for Social Media",
      description:
        "Create visually appealing graphics for social media marketing.",
      minBudget: 1000,
      maxBudget: 7000,
      bids: 14,
      averageBid: 3500,
      skills: ["Adobe Illustrator", "Photoshop", "Canva"],
      createdAt: new Date("2024-08-27"),
    },
    {
      title: "Custom CMS Development",
      description:
        "Develop a custom content management system for a news website.",
      minBudget: 6000,
      maxBudget: 30000,
      bids: 20,
      averageBid: 16000,
      skills: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      createdAt: new Date("2024-09-01"),
    },
    {
      title: "Chatbot Integration",
      description:
        "Integrate a chatbot into a customer support website to handle basic inquiries.",
      minBudget: 2000,
      maxBudget: 10000,
      bids: 16,
      averageBid: 6000,
      skills: ["Python", "Flask", "NLP", "JavaScript"],
      createdAt: new Date("2024-08-29"),
    },
    {
      title: "Mobile Game Development",
      description:
        "Develop a simple mobile game for iOS and Android platforms.",
      minBudget: 5000,
      maxBudget: 25000,
      bids: 22,
      averageBid: 14000,
      skills: ["Unity", "C#", "JavaScript"],
      createdAt: new Date("2024-09-04"),
    },
    {
      title: "Video Editing for Marketing Campaign",
      description: "Edit promotional videos for a new product launch campaign.",
      minBudget: 1500,
      maxBudget: 9000,
      bids: 9,
      averageBid: 4500,
      skills: ["Adobe Premiere Pro", "After Effects"],
      createdAt: new Date("2024-08-31"),
    },
    {
      title: "Social Media Management",
      description:
        "Manage social media accounts and create a content strategy.",
      minBudget: 3000,
      maxBudget: 15000,
      bids: 15,
      averageBid: 7000,
      skills: ["Social Media Marketing", "Content Creation", "SEO"],
      createdAt: new Date("2024-09-03"),
    },
    {
      title: "Cloud Infrastructure Setup",
      description:
        "Set up cloud infrastructure for a web application using AWS.",
      minBudget: 4000,
      maxBudget: 20000,
      bids: 12,
      averageBid: 10000,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      createdAt: new Date("2024-09-02"),
    },
    {
      title: "Machine Learning Model Development",
      description: "Develop a machine learning model for predictive analytics.",
      minBudget: 7000,
      maxBudget: 30000,
      bids: 18,
      averageBid: 18000,
      skills: ["Python", "TensorFlow", "scikit-learn", "Data Science"],
      createdAt: new Date("2024-08-30"),
    },
    {
      title: "Performance Optimization for Website",
      description:
        "Optimize a website for better performance and loading speed.",
      minBudget: 2000,
      maxBudget: 10000,
      bids: 14,
      averageBid: 5000,
      skills: ["JavaScript", "Web Performance", "CSS", "HTML"],
      createdAt: new Date("2024-09-01"),
    },
    {
      title: "Translation Services for Legal Documents",
      description: "Translate legal documents from Spanish to English.",
      minBudget: 1000,
      maxBudget: 5000,
      bids: 8,
      averageBid: 2500,
      skills: ["Translation", "Spanish", "English", "Legal Writing"],
      createdAt: new Date("2024-09-03"),
    },
    {
      title: "Custom ERP Development",
      description: "Develop a custom ERP system for a manufacturing company.",
      minBudget: 10000,
      maxBudget: 50000,
      bids: 25,
      averageBid: 30000,
      skills: ["Java", "Spring Boot", "MySQL", "JavaScript"],
      createdAt: new Date("2024-08-29"),
    },
    {
      title: "Virtual Assistant Development",
      description:
        "Develop a virtual assistant for automating customer service queries.",
      minBudget: 6000,
      maxBudget: 25000,
      bids: 17,
      averageBid: 12000,
      skills: ["Python", "NLP", "Machine Learning", "JavaScript"],
      createdAt: new Date("2024-09-02"),
    },
  ];
  const [searchParams] = useSearchParams();
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [projects, setProjects] = React.useState([]);
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  React.useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 1;
    if (page) setPage(page);
    setProjects(data.slice((page - 1) * 12, page * 12));
  }, [searchParams, data]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <main className="flex flex-col sm:gap-6 gap-3 xl:w-4/5 w-full xl:px-0 sm:px-6 px-3 min-h-screen sm:pt-28 pt-20 pb-4">
        <h1 className="text-2xl tracking-tight font-bold">Browse Projects</h1>
        <div className="flex gap-2 justify-between items-center w-full">
          <Select
            onValueChange={(value) => navigate(value)}
            defaultValue="/projects"
          >
            <SelectTrigger className="w-[180px] max-sm:hidden">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="/projects">Projects</SelectItem>
              <SelectItem value="/freelancers">Freelancers</SelectItem>
            </SelectContent>
          </Select>
          <Input
            name="search"
            autoComplete="search"
            placeholder="Search for projects"
            className="w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="flex gap-2">
            <SearchIcon size="20" /> Search
          </Button>
        </div>
        <div className="flex items-start gap-4 w-full">
          <div className="lg:flex hidden flex-col gap-2 w-1/4 justify-center bg-neutral-100 rounded-lg p-4">
            <h2 className="tracking-tight font-semibold text-xl text-center">
              Filters
            </h2>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Price</h3>
            <div className="flex justify-center items-center gap-1.5 whitespace-nowrap">
              Min ₹
              <Input name="min" placeholder="0" className="w-9/12 bg-white" />
            </div>
            <div className="flex justify-center items-center gap-1.5 whitespace-nowrap">
              Max ₹
              <Input
                name="max"
                placeholder="1000"
                className="w-9/12 bg-white"
              />
            </div>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Skills</h3>
            <Input
              name="skills"
              placeholder="Search for skills"
              className="bg-white w-full"
            />
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-1" />
              <Label htmlFor="label-1" className="font-normal">
                HTML
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-2" />
              <Label htmlFor="label-2" className="font-normal">
                CSS
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-3" />
              <Label htmlFor="label-3" className="font-normal">
                JavaScript
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-4" />
              <Label htmlFor="label-4" className="font-normal">
                React
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-5" />
              <Label htmlFor="label-5" className="font-normal">
                MongoDB
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-6" />
              <Label htmlFor="label-6" className="font-normal">
                NodeJS
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-7" />
              <Label htmlFor="label-7" className="font-normal">
                Tailwind
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-8" />
              <Label htmlFor="label-8" className="font-normal">
                ExpressJS
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-9" />
              <Label htmlFor="label-9" className="font-normal">
                GraphQL
              </Label>
            </div>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Project Location</h3>
            <div className="flex gap-2">
              <Input
                name="location"
                placeholder="Enter a location"
                className="bg-white w-full"
              />
              <Button variant="outline" size="icon" className="px-2 w-fit">
                <LocateFixedIcon size="20" />
              </Button>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-10" />
              <Label htmlFor="label-10" className="font-normal accent-blue-500">
                Gurgaon
              </Label>
            </div>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Languages</h3>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-11" />
              <Label htmlFor="label-11" className="font-normal">
                English
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-12" />
              <Label htmlFor="label-12" className="font-normal">
                Hindi
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-13" />
              <Label htmlFor="label-13" className="font-normal">
                Punjabi
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-14" />
              <Label htmlFor="label-14" className="font-normal">
                Tamil
              </Label>
            </div>
          </div>
          <div className="lg:w-3/4 w-full bg-neutral-100 rounded-lg sm:p-4 py-3">
            <div className="flex items-center justify-between max-sm:px-2">
              <p className="text-neutral-500 max-md:text-sm max-sm:hidden">
                Total {projects.length} results
              </p>
              <div className="flex gap-2 items-center max-sm:text-sm">
                Sort By
                <Select defaultValue="Latest">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Latest">Latest</SelectItem>
                    <SelectItem value="Oldest">Oldest</SelectItem>
                    <SelectItem value="Lowest Price">Lowest Price</SelectItem>
                    <SelectItem value="Highest Price">Highest Price</SelectItem>
                    <SelectItem value="Fewest Bids">Fewest Bids</SelectItem>
                    <SelectItem value="Highest Bids">Highest Bids</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                className="sm:hidden text-sm"
                onClick={() => setFiltersOpen(true)}
              >
                <Filter className="mr-1" size="18" />
                Filters
              </Button>
            </div>
            <hr className="my-3 w-full border-neutral-300 rounded visible max-sm:invisible" />
            <div className="flex flex-col sm:gap-2 gap-1">
              {projects.map((project, index) => (
                <Link key={index} to="#">
                  <div className="w-full flex flex-col gap-2 h-fit sm:ring-1 border-t-[1px] border-b-[1px] border-neutral-200 ring-neutral-200 sm:rounded p-4">
                    <div className="flex gap-1 justify-between items-center overflow-hidden">
                      <h2 className="text-xl tracking-tight font-semibold w-11/12 text-sky-500 truncate">
                        {project.title}
                      </h2>
                      <p className="whitespace-nowrap">Bids: {project.bids}</p>
                    </div>
                    <p>
                      Budget: ₹{project.minBudget} - ₹{project.maxBudget}
                    </p>
                    <p>{project.description}</p>
                    <p>Average Bid: ₹{project.averageBid}</p>
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col gap-1">
                        <div className="flex max-sm:flex-wrap gap-2 text-sky-500 text-sm overflow-hidden max-w-full">
                          {project.skills.map(
                            (skill, index) =>
                              index < 4 && (
                                <span
                                  className="hover:underline underline-offset-2 whitespace-nowrap truncate"
                                  key={index}
                                >
                                  {skill}
                                </span>
                              )
                          )}
                        </div>
                        <p className="text-neutral-500 text-xs">
                          {project.createdAt.toDateString()}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Bookmark"
                        onClick={(e) => {
                          e.preventDefault();
                          const icon = e.currentTarget.childNodes[0];
                          if (icon.getAttribute("fill") === "currentColor") {
                            icon.setAttribute("fill", "none");
                          } else {
                            icon.setAttribute("fill", "currentColor");
                          }
                        }}
                      >
                        <Bookmark />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      page === 1 ? "opacity-50 pointer-events-none" : ""
                    }
                    href={`?page=${page > 1 ? page - 1 : 1}`}
                  />
                </PaginationItem>

                {Array.from(
                  { length: Math.min(5, Math.ceil(data.length / 12)) },
                  (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href={`?page=${index + 1}`}
                        isActive={page === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                {Math.ceil(data.length / 12) > 5 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    href={`?page=${
                      page < Math.ceil(data.length / 12)
                        ? page + 1
                        : Math.ceil(data.length / 12)
                    }`}
                    className={
                      Math.ceil(data.length / 12) === page
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <Sheet open={filtersOpen} onOpenChange={(open) => setFiltersOpen(open)}>
        <SheetContent
          side="left"
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="scrollbar overflow-auto"
        >
          <SheetHeader>
            <SheetTitle className="text-xl font-bold tracking-tight">
              Filters
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1.5 w-full justify-center py-4">
            <h3 className="text-lg">Price</h3>
            <div className="flex justify-center items-center gap-1.5 whitespace-nowrap">
              Min ₹
              <Input name="min" placeholder="0" className="w-9/12 bg-white" />
            </div>
            <div className="flex justify-center items-center gap-1.5 whitespace-nowrap">
              Max ₹
              <Input
                name="max"
                placeholder="1000"
                className="w-9/12 bg-white"
              />
            </div>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Skills</h3>
            <Input
              name="skills"
              placeholder="Search for skills"
              className="bg-white w-full"
            />
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-1" />
              <Label htmlFor="label-1" className="font-normal">
                HTML
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-2" />
              <Label htmlFor="label-2" className="font-normal">
                CSS
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-3" />
              <Label htmlFor="label-3" className="font-normal">
                JavaScript
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-4" />
              <Label htmlFor="label-4" className="font-normal">
                React
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-5" />
              <Label htmlFor="label-5" className="font-normal">
                MongoDB
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-6" />
              <Label htmlFor="label-6" className="font-normal">
                NodeJS
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-7" />
              <Label htmlFor="label-7" className="font-normal">
                Tailwind
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-8" />
              <Label htmlFor="label-8" className="font-normal">
                ExpressJS
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-9" />
              <Label htmlFor="label-9" className="font-normal">
                GraphQL
              </Label>
            </div>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Project Location</h3>
            <div className="flex gap-2">
              <Input
                name="location"
                placeholder="Enter a location"
                className="bg-white w-full"
              />
              <Button variant="outline" size="icon" className="px-2 w-fit">
                <LocateFixedIcon size="20" />
              </Button>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-10" />
              <Label htmlFor="label-10" className="font-normal accent-blue-500">
                Gurgaon
              </Label>
            </div>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Languages</h3>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-11" />
              <Label htmlFor="label-11" className="font-normal">
                English
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-12" />
              <Label htmlFor="label-12" className="font-normal">
                Hindi
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-13" />
              <Label htmlFor="label-13" className="font-normal">
                Punjabi
              </Label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Checkbox id="label-14" />
              <Label htmlFor="label-14" className="font-normal">
                Tamil
              </Label>
            </div>
          </div>
          <SheetFooter className="max-sm:gap-2">
            <SheetClose asChild>
              <Button type="submit" variant="outline">
                Clear All
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button type="submit">Apply</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Projects;
