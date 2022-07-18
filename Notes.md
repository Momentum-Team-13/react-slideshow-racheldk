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
[ ] pass slide data from app.js to slideshow.js
[ ]     
[ ] THINK: how to show just one film?
[ ] THINK: how to change ui to show next film?    
[ ] hardcode one slide with data to make sure it shows up 
[ ] render slide using data passed (not hardcode)
[ ] change state in code 
[ ] buttons so user can change state
    [ ] start over 
        [ ] takes to slide 1 
        [ ] disabled on slide 1
    [ ] back 
        [ ] takes to previous slide 
        [ ] disabled on slide 1 
    [ ] next 
        [ ] takes to next slide 
        [ ] disabled on last slide         


## Research
[ ] materialize library (maybe use this time?)
[ ] props 
[ ] 