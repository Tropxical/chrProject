# C.H. Robinson Interview Project

This project was made for a software engineering interview at C.H. Robinson. At its core, it utilizes the BFS algorithm to find the shortest path between two countries on a very simplified plane, oriented in a neighboring map.

A fully published version can be found at https://chr.tropxical.com/

This project required me to either;

- Create a standalone backend API
- Create a frontend application, which does all of the logic client-side.

I decided to do both (Frontend isn't that pretty, given the time constraints.)

## Technologies Used

As the project requirements allowed me to choose the technolgies to use, I've chose the following technologies / frameworks:

For the backend, the primary language is JavaScript / TypeScript with the Deno runtime. The primary framework I'm using is Fresh, which handles routing and server side rendering for different pages. Below is a list of all miscellaneous technologies used to deploy this project. My other projects usually follow the same stack, with some differences depending on need, and home environment.

In short these are all of the miscellaneous technologies utilized:

- JavaScript / TypeScript | Deno Runtime Enviornment
- Fresh Web Framework
- Preact | HTML & Tailwind CSS
- Docker & Docker Compose
- NGINX's Reverse Proxy
- Cloudflare DNS & DDoS Mitigation

### DNS & Hosting

For all of my projects, I always utilize Cloudflare as the main DNS host. Not only do they provide excellent DDoS mitigation, they also provide a secure way to point domains to origin servers without revealing their IP address. From an OpSec point of view, it lessens the attack surface (if done properly), and (if configured properly) prevents bad actors from snooping around.

This entire project is hosted on a dedicated linux server, specifically Ubuntu. For the sake of simplicity, everything is routed behind NGINX's reverse proxy to ensure multiple applications can listen on different local ports, while still being reachable based on their respective domains.

## Design Decisions

### API Handling
For an enterprise environment where uptime and understandability matter the most, I usually like to have a dedicated endpoint that is version controlled. This can either be done via a subdomain or an explicit path.

- https://api.example.com/v1/
- https://example.com/api/v1/

However for this project, anything following the root path is the API. I did this in accordance to the project's requirements.

## Closing Notes

To the recruiter and engineers at C.H. Robinson,

When it comes to software engineering applications, my biggest challenge has always been finding the opportunity to actually demonstrate my skills. So far, the interview process has been absolutely smooth, and understandable in and out. It was an absolute pleasure to plan, build, and deploy this project, and even more fulfilling to be able to demonstrate my abilities for this interview.

So finally, I'd like to extend my gratitude and thank you for the opportunity. I look forward to meeting everyone this Monday, and to going through this entire project.

Cheers!<br />
Hoang Le