# Prayer journal frontend

This is the frontend code of my Prayer Journal app. This frontend was built using React/Redux. This app is intended for a user to submit prayer journal entries and allow people to comment and like. This app has the following features:

* Utilizes http-only cookies to store JSON web token encrypted user information client-side.
* Interactive React user interface allows user to perform CRUD actions and updates instantly to web application.
* Posts entries, comments, and likes via redux-thunk to Rails API using postgreSQL database.
* Implements Quill rich text editor allowing user to post photos and embed videos to journal entry.
* Stores application state via Redux store allowing universal source of truth.
* Client-side routing performed to allow access to nested routes via React Router
* Serializes data from Rails API via JSON fast API
* Utlilized React Bootstrap for responsive interface.

[![prayer journal](https://img.youtube.com/vi/DekNKan0DbA/0.jpg)](https://www.youtube.com/watch?v=DekNKan0DbA)

The code for the backend of this app can be found at [prayer journal backend](https://github.com/ting682/prayerjournal-backend)