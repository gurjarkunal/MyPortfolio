import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "DriProFit App",
    description:
      "Developed a multilingual gym coaching app that supports English, French, and Arabic. Implemented weekly exercise plans with detailed descriptions, reference images, and instructional videos. Worked on API integrations to fetch exercise data and manage user progress efficiently.",
    image: "/projects/driprofit.png",
    tags: ["Flutter", "Dart", "NodeJS", "RestAPIs", "Subscription"],
    link: "https://play.google.com/store/apps/details?id=com.app.dryfit&pcampaignid=web_share",
    github: "#",
  },
  {
    title: "Bookmyglam App",
    description:
      "Developed a dual-app platform with separate Customer and Beautician applications. Built a location-based beauty and wellness service booking platform, enabling users to discover and book nearby salons, spas, massage therapists, and beauty professionals. Implemented appointment scheduling with support for selecting services, preferred date, time, and service provider. Consumed REST APIs for authentication, booking management, payment processing, and service listings.",
    image: "/projects/bookmyglam.png",
    tags: [
      "Flutter",
      "Dart",
      "NodeJS",
      "RestAPIs",
      "RazorPay",
      "Google Maps/Location Services",
    ],
    link: "https://play.google.com/store/apps/details?id=com.app.salondealpecustomer&pcampaignid=web_share",
    github: "#",
  },
  {
    title: "Whielo App",
    description:
      "Implemented an end-to-end vehicle service booking system, allowing users to schedule various car maintenance and repair services. Built a real-time service tracking workflow, enabling customers to monitor every stage of their vehicle’s service Integrated secure online payment functionality for seamless service transactions. Integrated 1-to-1 real-time chat using Firebase Cloud Firestore + Realtime Database for seamless messaging.",
    image: "/projects/whielo.png",
    tags: [
      "Flutter",
      "Dart",
      "GetX",
      "RestAPI",
      "RazorPay",
      "Firebase",
      "Nodejs",
    ],
    link: "https://play.google.com/store/apps/details?id=com.app.automotiveService&pcampaignid=web_share",
    github: "#",
  },
  {
    title: "Salem Assist App",
    description:
      "Developed a roadside assistance platform consisting of two Flutter applications: Customer App and Driver App. Built the Customer App with four emergency roadside services: Fuel Delivery, Battery Assistance, Tyre Service, and Towing Service. Implemented real-time service request creation, allowing customers to request assistance for their registered vehicles. Developed a vehicle management module where users can add and manage multiple vehicles for quick service requests. Integrated real-time order tracking with status updates including Pending, Ongoing, Completed, and Cancelled.",
    image: "/projects/salemassist.png",
    tags: [
      "Flutter",
      "Dart",
      "GetX",
      "RestAPI",
      "RazorPay",
      "Firebase",
      "FCM",
      "Nodejs",
    ],
    link: "https://play.google.com/store/apps/details?id=com.app.salemassist&pcampaignid=web_share",
    github: "#",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch auto-rows-fr">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 h-full flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Link Icon */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-3 rounded-full glass group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 shrink-0
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
