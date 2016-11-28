# Random Quote Generator - React
### Reiterating on another project using React

**Objective**: Rebuild my Random Quote Generator using React.

**Built with primarily**:

* Sass
* React

**Developer notes**

I decided it would be good practice to rebuild my Random Quote Generator app, switching out all the logic and API calls that were written in jQuery, for React.

I learned a lot about making API calls in React, mostly the importance of binding `this` when needing to access or update the states in `componentDidMount`. Evidently, using Arrow Functions will automatically bind `this` for you, so I used it on the `success` parameter in the API calls.

...should note that I still used jQuery's AJAX method of calling an API. If I want to try and get away from using jQuery, there are other options available to use. The [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) API was one tool I ran across that sounds like is pretty popular for basic apps. Redux is the other tool I keep reading about as part of the common React ecosystem for making API calls; that's another tool I should read about using, once I feel more secure in my React basics.

I was trying to figure out how to again separate the new quote and new photo functionalities into their own components, but had issue learning how to get the components to "talk" to each other. It seems like the React thing to do. However for sake of just finishing this project (finding the simplest way of implementation) I once more combined the code into one js file. Ah well.

In the jQuery version of this app, I had a text transition that was kinda nice, where the quote text would fade in and out upon load and getting a new quote, but in the interest of time, I skipped over re-implementing that effect in this iteration.

Apparently there's a whole methodology of how to write and modularize CSS when using React. Another thing on my list.

While I used Gulp in the jQuery version, I didn't use it this time, even though I think I found that there are React plugins for Gulp. Webpack is the standard bundler tool in the React ecosystem and I'll decide to learn to use it properly next. 
