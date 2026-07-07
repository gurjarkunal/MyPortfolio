import React from "react";
import { ArrowUpRight } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

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
      "Developed a roadside assistance platform consisting of two Flutter applications: Customer App and Driver App. Built the Customer App with four emergency roadside services: Fuel Delivery, Battery Assistance, Tyre Service, and Towing Service. Implemented real-time service request creation, allowing customers to request assistance for their registered vehicles. Developed a vehicle management module where users can add and manage multiple vehicles for quick service requests. Integrated real-time order tracking with status updates including Pending, Ongoing, Completed, and Cancelled. Built the Driver App to receive and manage incoming service requests from customers. Implemented a custom notification ringtone that continuously rings until the driver accepts or rejects a service request, ensuring timely response to emergencies. Enabled drivers to accept, reject, and update service requests while providing real-time status synchronization between both applications. Integrated location services to support efficient service dispatching and customer tracking.",
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
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
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {/* <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GitHubIcon className="w-5 h-5" />
                  </a> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
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
            </div>
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
