# wiseDOM
### inspired by jQuery

wiseDOM is a lightweight javascript library for manipulating and traversing the DOM. It works by wrapping DOM nodes in a javascript class. This allows the wrapped nodes access to functions designed to simplify and streamline common DOM manipulation and traversal needs. It also simplifies XMLHttpRequests by handling the open, onload, and send functions just like a jQuery.Ajax() request.

## Download and Install

Download the repository and add ```lib``` to your javascript directory. Add the webpack.config.js file to your root directory. Next, add a script tag to the ```<head>``` of your html project.

```
<script type="text/javascript" src="./your_jacascript_directory_name/lib/bundle.js"></script>
```

Finally, run ```webpack --watch``` from the root of your directory and you'll be up and running with wiseDOM!

## DOM Manipulation

- .html()
* set the html for every element or get the html for the first element.

- .append() -

- .attr() -

- .removeClass() -

- .addClass() -


## DOM Traversal

- .children() -

- .parent() -

- .find() -

## Ajax Requests

- .ajax() -

- .extend() -
