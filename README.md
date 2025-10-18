# CH Robinson Interview Project

This project was made for a software engineering interview at C.H. Robinson. At its core, it utilizes the BFS algorithm to find the shortest path between two countries on a very simplified plane, oriented in a neighboring map.

A fully published version can be found at https://chr.tropxical.com/

This project required me to either;

- A. Create a standalone backend API
- B. Create a frontend application, which does all of the logic client-side.

I decided to do both (Frontend isn't that pretty, given the time constraints.)

As the project requirements allowed me to, I chose the following technologies / frameworks:

For the backend, the primary language is JavaScript with the Deno runtime. The primary framework I'm using is Fresh, which handles routing and server side rendering for different pages.


## Design Decisions

### API Handling
For an enterprise environment where uptime and understandability matter the most, I usually like to have a dedicated endpoint that is version controlled. This can either be done via a subdomain or an explicit path.

- https://api.example.com/v1/
- https://example.com/api/v1/

However for this project you'll notice that anything following the root path is the API. I did this in accordance to the project's requirements.


## Closing Notes
To the recruiter and engineers at C.H. Robinson,

When it comes to software engineering applications, my biggest challenge has always been finding the opportunity to actually demonstrate my skills. I find that the biggest hurdle has always been getting through that first door. It was an absolute pleasure to plan, build, and deploy this project, and even more fulfilling to be able to demonstrate my abilities.

So finally, I'd like to extend my gratitude and thank you for the opportunity. I look forward to meeting everyone this Monday and to going through this entire project.

Cheers!