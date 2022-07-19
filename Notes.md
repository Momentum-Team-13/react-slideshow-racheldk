## Intro
[ ] user can progress through set of data, one item at a time 
[ ] user can navigate through data presented as a slideshow
[ ] each slide 
    [ ] film title 
    [ ] original title in Japanese
    [ ] poster image
    [ ] release date 
    [ ] description


## Requirements
[ ] When the page loads, the user should see the first slide.
[ ] A user can see the next slide in the slideshow when the next button is clicked.
[ ] A user can go back to the previous slide in the slideshow when the back button is clicked.
[ ] A user can start over from the beginning when the Start Over button is clicked.
[ ] A user should not be able to click on the Next button when the slide is the last one (because the button is disabled).
[ ] A user should not be able to click on the Back button when the slide is the first one (because the button is disabled).
[ ] A user should not be able to click on the Start Over button when the slide is the first one (because the button is disabled).
[ ] The application should be styled, but it can be very simple. You can use a library if you want to (lightweight ones like Bulma or Materialize are good options), but your focus should be on functionality. 


## Do these things! 
[x] make (empty) Slideshow component in its own file 
    [ ] optional: make slide component 
        [ ] import needed files
        [ ] export 
    [x] import to App.js
    [x] export 
[x] app.js should render the slideshow component 
[x] sketch UI
    [ ] what HTML will JXS need to include? 
[x] hookup materialize     
[x] pass slide data from app.js to slideshow.js     
[ ] THINK: how to show just one film?
[ ] THINK: how to change ui to show next film?    
[x] hardcode one slide with data to make sure it shows up 
[x] render slide using single data passed from same file
[ ] render slide using single data passed from diff file
[x] render specific slide from array 
[x] change state in code 
[x] buttons so user can change state
    [x] start over 
        [x] takes to slide 1 
        [x] disabled on slide 1
    [x] back 
        [x] takes to previous slide 
        [x] disabled on slide 1 
    [x] next 
        [x] takes to next slide 
        [x] disabled on last slide         


## Spicy Options 
Sort by Date 
[x] make array of films sorted by date
[x] make separate slide component pages 
    [s] using regular arrray 
    [x] using sorted by date array 
[x] update ternary to call specific slide component 
[x] update button 
keep state in slideshow     


## Research
[x] materialize library (maybe use this time?)
[ ] props 
[ ] how useEffect works 


from class:
- 2 states: no selected dev (show list) and selected dev 
- put this state on App 
- when state changes, react rerenders the component and UI changes accordingly. so you're only ever looking at one state at a time 

- app.js "data" holds onto the json, so will give us an array

From Class: Amy's example:
