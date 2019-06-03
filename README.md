# Munch Da Burger

Deployed Link: https://munch-da-burger.herokuapp.com/

## Description
A full stack application burger logger that lets users enter a burger combination and then 'eat' it. Burgers can also be deleted.

## Results
Users choose a burger name, a topping from a preset list, and then decide whether or not the burger has been eaten. Upon submitting this information, an AJAX call is issued to an Node.js server which receives the request, and then submits the request information to a database for burger storage. This app uses MySQL for the database, an Express.js server for route handling, and handlebars for the template engine. All server side code is written in Typescript, which then is compiled into Javascript.

### Future Improvements
- [ ] Allow modification of burgers after creation
- [ ] Improve UI

