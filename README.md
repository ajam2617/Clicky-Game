# :rocket: Galaxy Memory Game :rocket:
A memory game with React, which breaks application's UI into components, manages component state, and responds to user events. Images are generated on page load. Each image listens for a click event. App keeps track of user's score, high score, and resets when an image has been clicked more than once. Every time an image is clicked, the images rerender in a random order. [DeployedApp](http://ajam2617.github.io/Clicky-Game)

# :nut_and_bolt: Resources :nut_and_bolt:
* React
* Bootstrap
* CSS
* HTML
* JSX
* JavaScript

# :sweat_smile: Issues :sweat_smile:

I was able to get a good file structure in the beginning, and was able to render headers to my page. I had some issues with rendering all the images to the page becuase I was importing them from a json file. I worked with my tutor and decided to render the images from an array in a JS file. That solved that issue. 
I also had an issues with tracking the high score. The high score would not render to the page. My code was a bit messy, which everything in one function with a lot of if statements. I decided to break up that function into 3 smaller functions. That cleaned up my code a lot. When I was finishing that up, I realized I never passed the high score to the JSX/React component, so it's possible my original code was functioning, I just never passed the required information. My code is much cleaner now. Everything is functioning. 
This was the first time trying to deploy a React app to GitHub pages. That was a bit tricky, but I was able to complete this task also!

_Code before the cleanup_
<img src="/src/images/messy.JPG">

_Code after cleanup_
<img src= "/src/images/clean.JPG">








