Travlr Getaways - Full Stack Travel Booking Application

A full stack MEAN (MongoDB, Express, Angular, Node.js) travel booking application with a customer-facing SPA and a secure admin dashboard.

Architecture

In this project, I worked with two different frontend approaches. At the beginning, I used Express with Handlebars, HTML, and basic JavaScript to render pages on the server side. This required full page reloads and felt less interactive. Later, I built an Angular single-page application (SPA), which runs in the browser and updates content dynamically without reloading the page. This made the user experience much smoother.

Angular’s component-based structure also made a big difference. Breaking the UI into smaller pieces (like trip cards and forms) made the code easier to manage compared to the earlier static approach.

The backend uses MongoDB because it is flexible and works well with JavaScript. Since travel data can vary (different trips, pricing, details), a NoSQL database makes it easier to store and update information without strict schemas. Its JSON-like structure also fits naturally with the rest of the stack.

Functionality

JSON is different from JavaScript in that it is only a data format, not a programming language. In this project, JSON is what connects the frontend and backend. The Express API sends trip data in JSON format, and Angular reads and displays it in the UI.

During development, I refactored several parts of the application. For example, I separated the trip display into a reusable trip-card component and handled API calls through a service file. This reduced duplicated code and made updates much easier. If something changes, I only need to update it in one place.

Reusable components improved consistency, made the app easier to maintain, and helped keep the code more organized overall.

Testing

I used Postman and browser developer tools to test API endpoints like GET, POST, PUT, and DELETE. Each method was used to retrieve, create, update, or remove data from the database.

After adding authentication, testing became a bit more complex. Some routes required a valid JWT token, so I had to include it in the request headers. If the token was missing or invalid, the server correctly returned 401 or 403 errors. This helped ensure that only authorized users could make changes.

Overall, I learned that testing is not just about checking if things work, but also making sure access and security are handled properly.

Reflection

This course helped me understand how a full stack application actually works from start to finish. I built a complete project using Angular, Express, MongoDB, and REST APIs, and learned how all the pieces connect.

I also spent a lot of time debugging real issues, like API errors, image path problems, and authentication setup. That process helped me get more comfortable troubleshooting and fixing problems on my own.

Some of the main skills I developed include building SPAs with Angular, creating RESTful APIs, working with MongoDB, and implementing JWT authentication. I feel more confident now working on full stack projects and better prepared for real-world development work.
