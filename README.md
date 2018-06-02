
### WiseDOMe Weather App

Check it out live [here.](https://wisedomeweather.github.io/)


My weather app is built with JavaScript, HTML5, CSS3 and uses my lightweight library called wiseDOMe for manipulating and traversing the DOM. My app uses the Google Places Autocomplete API for the city search feature. Once the city object has been retrieved, I then use wiseDOMe's customized Ajax request to send an XMLHttpRequest to openweather.org for the requested city's current weather data. Once the weather data has been received, I pull out the temperature, wind, humidity and description from the JSON response. I then use my window.$w function to query the DOM tree for each HTML element I need so I can update each property with the new data.


![alt screen shot](https://res.cloudinary.com/aptquirks/image/upload/v1524598867/Screen_Shot_2018-04-24_at_3.39.11_PM_koerzl.png)


### More about wiseDOMe

WiseDOMe is a lightweight JavaScript library for manipulating and traversing the DOM. It is set up to help make it easier for developers to perform actions on HTML Elements and set or change values of HTML DOM Element properties. You can pass in a string value, an HTML Element or a function into wiseDOMe's $W function.

## Ajax Requests

* .ajax()
  - Creates and sends an asynchronous XMLHttpRequest by handling the open, onload and send functions. Takes success and error callbacks to be pushed onto the task queue after the async request has return a response from the sever.

## DOM Manipulation

* .html()
  - Set the HTML for every element or get the html for the first element.

* .append()
  - Insert the specified content to the end of each element.

* .attr()
  - Get the attributes value for the first element or set the attributes for every matched element.

* .removeClass()
  - Remove specified class from the elements classList.

* .addClass()
  - Add a specified class to the elements classList.

## DOM Traversal

* .children()
  - Get the children for each element in the specified set of elements.

* .parent()
  - Get the parents for each element in the specified set of elements.

* .find()
  - Get the descendants of each element in the set based on a class name selector.
