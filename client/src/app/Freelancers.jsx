import React from "react";
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
import { Filter, SearchIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Freelancers() {
  const navigate = useNavigate();
  const freelancers = [
    {
      fullName: "John Doe",
      username: "john_doe",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 500,
      bids: 15,
      bio: "Experienced web developer specializing in front-end technologies.",
      location: "New Delhi, India",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      fullName: "Jane Smith",
      username: "jane_smith",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 600,
      bids: 22,
      bio: "Full-stack developer with 5+ years of experience in MERN stack.",
      location: "Mumbai, India",
      skills: ["JavaScript", "Node.js", "React", "MongoDB"],
    },
    {
      fullName: "Alice Johnson",
      username: "alice_johnson",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 450,
      bids: 18,
      bio: "Front-end developer specializing in creating beautiful UI/UX.",
      location: "Bangalore, India",
      skills: ["React", "Redux", "CSS", "Figma"],
    },
    {
      fullName: "Bob Lee",
      username: "bob_lee",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 550,
      bids: 12,
      bio: "Back-end developer with a focus on scalable applications.",
      location: "Hyderabad, India",
      skills: ["Node.js", "Express", "MongoDB", "AWS"],
    },
    {
      fullName: "Emily Brown",
      username: "emily_brown",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 650,
      bids: 10,
      bio: "DevOps engineer with experience in cloud infrastructure.",
      location: "Chennai, India",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      fullName: "David Wilson",
      username: "david_wilson",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 480,
      bids: 14,
      bio: "Python developer focused on data analysis and machine learning.",
      location: "Pune, India",
      skills: ["Python", "Pandas", "NumPy", "TensorFlow"],
    },
    {
      fullName: "Sophia Martinez",
      username: "sophia_martinez",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 550,
      bids: 11,
      bio: "Digital marketer specializing in SEO and content strategy.",
      location: "Ahmedabad, India",
      skills: [
        "SEO",
        "Content Writing",
        "Google Analytics",
        "Social Media Marketing",
      ],
    },
    {
      fullName: "Michael Chen",
      username: "michael_chen",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 700,
      bids: 9,
      bio: "AI and ML specialist with experience in developing predictive models.",
      location: "Kolkata, India",
      skills: ["Python", "R", "Machine Learning", "Data Science"],
    },
    {
      fullName: "Olivia Patel",
      username: "olivia_patel",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 400,
      bids: 16,
      bio: "UX/UI designer passionate about creating intuitive interfaces.",
      location: "Jaipur, India",
      skills: ["Figma", "Sketch", "Adobe XD", "User Research"],
    },
    {
      fullName: "Daniel Garcia",
      username: "daniel_garcia",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 620,
      bids: 8,
      bio: "Cloud architect with extensive experience in AWS and Azure.",
      location: "Surat, India",
      skills: ["AWS", "Azure", "Terraform", "Cloud Security"],
    },
    {
      fullName: "Ava Kim",
      username: "ava_kim",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 680,
      bids: 13,
      bio: "Mobile app developer with a focus on Flutter and React Native.",
      location: "Lucknow, India",
      skills: ["Flutter", "React Native", "iOS", "Android"],
    },
    {
      fullName: "Liam Thompson",
      username: "liam_thompson",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 550,
      bids: 17,
      bio: "Full-stack developer specializing in Python and Django.",
      location: "Patna, India",
      skills: ["Python", "Django", "JavaScript", "React"],
    },
    {
      fullName: "Mia Rivera",
      username: "mia_rivera",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 520,
      bids: 19,
      bio: "Creative graphic designer with 7+ years of experience.",
      location: "Nagpur, India",
      skills: ["Photoshop", "Illustrator", "InDesign", "Logo Design"],
    },
    {
      fullName: "Noah Brown",
      username: "noah_brown",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 480,
      bids: 20,
      bio: "Data scientist with expertise in big data and AI models.",
      location: "Indore, India",
      skills: ["Python", "SQL", "Hadoop", "Spark"],
    },
    {
      fullName: "Isabella Adams",
      username: "isabella_adams",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 700,
      bids: 15,
      bio: "Experienced cybersecurity analyst with expertise in network security.",
      location: "Vadodara, India",
      skills: [
        "Network Security",
        "Penetration Testing",
        "Malware Analysis",
        "Firewalls",
      ],
    },
    {
      fullName: "Ethan Wang",
      username: "ethan_wang",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 520,
      bids: 11,
      bio: "Blockchain developer with expertise in smart contracts.",
      location: "Bhopal, India",
      skills: ["Solidity", "Ethereum", "Web3.js", "Cryptography"],
    },
    {
      fullName: "Charlotte Miller",
      username: "charlotte_miller",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 600,
      bids: 9,
      bio: "Software engineer with a focus on performance optimization.",
      location: "Kanpur, India",
      skills: ["C++", "Java", "Performance Tuning", "Algorithms"],
    },
    {
      fullName: "Henry Lewis",
      username: "henry_lewis",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 490,
      bids: 12,
      bio: "Java developer with experience in building enterprise applications.",
      location: "Ranchi, India",
      skills: ["Java", "Spring Boot", "Microservices", "Hibernate"],
    },
    {
      fullName: "Emma Moore",
      username: "emma_moore",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 630,
      bids: 14,
      bio: "Database administrator with expertise in SQL and NoSQL databases.",
      location: "Coimbatore, India",
      skills: ["SQL", "NoSQL", "Oracle", "Database Optimization"],
    },
    {
      fullName: "Lucas Harris",
      username: "lucas_harris",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 680,
      bids: 7,
      bio: "Embedded systems developer with a passion for IoT.",
      location: "Thiruvananthapuram, India",
      skills: ["C", "C++", "IoT", "Embedded Systems"],
    },
    {
      fullName: "Amelia White",
      username: "amelia_white",
      avatar:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1723483837/sociial/settings/r5pvoicvcxtyhjkgqk8y.png",
      hourlyRate: 540,
      bids: 13,
      bio: "Marketing strategist with a focus on digital transformation.",
      location: "Bhubaneswar, India",
      skills: [
        "Digital Marketing",
        "SEO",
        "Content Strategy",
        "Email Marketing",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <main className="flex flex-col sm:gap-6 gap-3 xl:w-4/5 w-full xl:px-0 sm:px-6 px-3 min-h-screen sm:pt-28 pt-20 pb-4">
        <h1 className="text-2xl tracking-tight font-bold">Find Freelancers</h1>
        <div className="flex gap-2 justify-between items-center w-full">
          <Select
            onValueChange={(value) => navigate(value)}
            defaultValue="/freelancers"
          >
            <SelectTrigger className="w-[180px] max-sm:hidden">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="/projects">Projects</SelectItem>
              <SelectItem value="/freelancers">Freelancers</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Search for freelancers" className="w-full" />
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
            <h3 className="text-lg">Hourly Rate</h3>
            <div className="flex justify-center items-center gap-1.5">
              Min ₹
              <Input placeholder="0" className="w-9/12 bg-white" />
            </div>
            <div className="flex justify-center items-center gap-1.5">
              Max ₹
              <Input placeholder="1000" className="w-9/12 bg-white" />
            </div>
            <hr className="my-1 w-full border-neutral-300 rounded" />
            <h3 className="text-lg">Skills</h3>
            <Input placeholder="Search for skills" className="bg-white" />
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
            <h3 className="text-lg">Online</h3>
            <div className="flex items-center gap-2 text-sm">
              <Switch /> Online freelancers only
            </div>
          </div>
          <div className="lg:w-3/4 w-full bg-neutral-100 rounded-lg sm:p-4 py-4">
            <div className="flex items-center justify-between max-sm:px-4">
              <div className="sm:flex hidden gap-2 items-center">
                Showing
                <Select defaultValue="20">
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
              <p className="text-neutral-500 max-md:text-sm max-sm:hidden">
                Total {freelancers.length} results
              </p>
              <div className="flex gap-2 items-center">
                Sort By
                <Select defaultValue="Relevant">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Relevant">Relevant</SelectItem>
                    <SelectItem value="Experienced">Experienced</SelectItem>
                    <SelectItem value="Freshee">Freshee</SelectItem>
                    <SelectItem value="Lowest Rate">Lowest Rate</SelectItem>
                    <SelectItem value="Highest Rate">Highest Rate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="sm:hidden">
                <Filter className="mr-1" size="20" />
                Filters
              </Button>
            </div>
            <hr className="my-3 w-full border-neutral-300 rounded max-sm:invisible" />
            <div className="flex flex-col sm:gap-2 gap-1">
              {freelancers.map((freelancer, index) => (
                <Link key={index} to="#">
                  <div className="w-full flex max-sm:flex-col gap-2 h-fit sm:ring-1 border-t-[1px] border-b-[1px] border-neutral-200 ring-neutral-200 sm:rounded p-4">
                    <div className="flex items-center gap-2 sm:w-fit w-full">
                      <img src={freelancer.avatar} className="object-contain sm:w-40 w-20" />
                      <div className="flex flex-col sm:hidden justify-between w-full">
                        <div className="flex flex-wrap items-center h-fit gap-2">
                          <h3 className="font-bold text-xl text-sky-500 tracking-tight">
                            {freelancer.fullName}
                          </h3>
                          <p className="text-sm text-neutral-500">
                            @{freelancer.username}
                          </p>
                          <p className="font-semibold whitespace-nowrap">
                            ₹{freelancer.hourlyRate} per hour
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="sm:flex hidden justify-between w-full">
                        <div className="flex items-center h-fit gap-2">
                          <h3 className="font-bold text-xl text-sky-500 tracking-tight whitespace-nowrap">
                            {freelancer.fullName}
                          </h3>
                          <p className="text-sm text-neutral-500">
                            @{freelancer.username}
                          </p>
                        </div>
                        <p className="font-semibold whitespace-nowrap">
                          ₹{freelancer.hourlyRate} per hour
                        </p>
                      </div>
                      <p>{freelancer.location}</p>
                      <p>{freelancer.bio}</p>
                      <div className="flex gap-2 text-sky-500 text-sm">
                        {freelancer.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="hover:underline underline-offset-2"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="sm:flex grid grid-cols-2 justify-end items-center gap-2 w-full">
                        <Button>Contact</Button>
                        <Button variant="outline">Save</Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Freelancers;
