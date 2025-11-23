New Component Plan  
Express Rate limiter
Student: Paramdeep Singh  
Project: Movie Journal API  
Date: 15 November 2025  


 1. Overview of the component

 I am adding the new component to the Movie Journal API 

 The new component added to the Movie Journal API is kind a  Rate Limiting using the express-rate-limit library.

Rate limiting controls  that how many requests an user can make within a time window. This protects the API from:

Abuse

Accidental overload

Brute force attacks

High-frequency spamming

By limiting requests, the API becomes more secure and more stable especially when public.



 2. Why i choose this component

I selected rate limiting because:

It is valuable real-world backend feature

It would  directly improves API security

It is simple, maintainable, and scalable


After  doing the 100 rapid calls to:

GET http://localhost:3000/api/v1/search?query=test

Response becomes:

{
  "status": 429,
  "message": "Too many requests. Please try again later."
}
