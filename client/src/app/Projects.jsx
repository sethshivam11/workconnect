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
import { LocateFixedIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
  const projects = [
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

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <main className="flex flex-col gap-6 w-4/5 min-h-screen pt-28 pb-4">
        <h1 className="text-2xl tracking-tight font-bold">Browse Projects</h1>
        <div className="flex gap-2 justify-between items-center w-full">
          <Select
            onValueChange={(value) => navigate(value)}
            defaultValue={
              location.pathname.includes("projects")
                ? "/projects"
                : "/freelancers"
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="/projects">Projects</SelectItem>
              <SelectItem value="/freelancers">Freelancers</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Search for projects" className="w-full" />
          <Button className="flex gap-2">
            <SearchIcon size="20" /> Search
          </Button>
        </div>
        <div className="flex items-start gap-2 w-full">
          <div className="flex flex-col gap-2 w-1/3 justify-center bg-neutral-100 rounded-lg p-4">
            <h2 className="tracking-tight font-semibold text-xl text-center">
              Filters
            </h2>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Price</h3>
            <div className="flex justify-center items-center gap-1.5">
              min
              <Input className="w-9/12 bg-white" />
              INR
            </div>
            <div className="flex justify-center items-center gap-1.5">
              max
              <Input className="w-9/12 bg-white" />
              INR
            </div>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Skills</h3>
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
              <Input className="bg-white w-full" />
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
          <div className="w-2/3 bg-neutral-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                Showing
                <Select defaultValue="10">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="40">40</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                entries
              </div>
              <p className="text-neutral-500">Total 100 results</p>
              <div className="flex gap-2 items-center">
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
            </div>
            <hr className="my-3 w-full border-neutral-300 rounded" />
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full ring-1 ring-neutral-200 rounded p-2"
              >
                <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p>{project.bids}</p>

                </div>
                <p>{project.description}</p>
                <div className="flex items-center gap-2">
                  <p>Budget:</p>
                  <p>
                    ₹{project.minBudget} - ₹{project.maxBudget}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Bids:</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Average Bid:</p>
                  <p>{project.averageBid} INR</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Skills:</p>
                  <div className="flex gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p>Posted on:</p>
                  <p>{project.createdAt.toDateString()}</p>
                </div>
                <Button className="">Bid Now</Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projects;
