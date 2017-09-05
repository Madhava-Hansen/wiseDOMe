# wiseDOM

### Inspired by jQuery

wiseDOM is a lightweight javascript library for manipulating and traversing the DOM. It works by wrapping DOM nodes in a dom_node_collection.js class. This allows the wrapped nodes access to functions designed to simplify and streamline common DOM manipulation and traversal needs. It also simplifies XMLHttpRequests by handling the open, onload, and send functions just like a Ajax request.


## DOM Manipulation

* .html()
  - Set the HTML for every element or get the html for the first element.

* .append()
  - Insert the specified content to the end of each element.

* .attr()
  - Get the attributes value for the first element or set the attributes for every matched element.

* .removeClass()
  - Remove spcified class from the elements classList.

* .addClass()
  - Add a specified class to the elements classList.

## DOM Traversal

* .children()
  - Get the children for each element in the specified set of elements.

* .parent()
  - Get the parents for each element in the specified set of elements.

* .find()
  - Get the descendants of each element in the set based on a class name selector.

## Ajax Requests

* .ajax()

* .extend()
