# movie-journal-api

# Project: Movie Journal API
# Student: Paramdeep Singh
# Date: November 2, 2025


# Title of my project : Movie Journal API

# Purpose and its  Theme:

# The Movie Journal API is a RESTful backend application which is  designed for movie lovers who want to track  review, and organize the films and TV shows that they like to  watch in free time . The main purpose of this is to provide users a secure platform to store personal movie data, rate their favorites, and maintain a watchlist of upcoming titles.

# The theme combines entertainment and  personal productivity demonstrate how back-end systems can power media-tracking apps. It showcase my ability to design and implement a good backend architecture that can  handles authentication,, CRUD operations and structure  data flow.

# Why I Chose It:

# I selected this topic because it’s both fun and technically meaningful and i am a movie enthaustist . It helps  me to apply backend development skills in relatable context with  practicing  the clean architecture validation and  test and documentation. The entertainment domain keeps the project interseting, while still fits the Capstone  requirements.

# 2. Scope and Functionality

# Planned Resources and Endpoints

# Movies Store movie details (title, genre, release year, rating)
# POST /movies, GET / movies   GET /movies/:id,   PUT /movies/:id, DELETE /movies/:id

# Reviews	Allow users to review and rate movies
# POST /reviews, GET /reviews/:movieId, DELETE /reviews/:id

# Watchlists	This Managed movie the user plans  to watch laters	POST /watchlists, GET /watchlists, DELETE /watchlists/:id

# Users Auth	Handle user registration , login, and roles	POST /auth/signup, POST /auth/login, GET /users/:id


# Data Model Example
# {
 # "title": "ASUR",
# "genre": "Sci-Fi",
  # "releaseYear": 2014,
  # "rating": 10,
}




 what done in  Milestone 3

1. added Firebase Authentication for login and registration in Milestone 3.
2. Swagger Documentation Added
3. Updated Route Files