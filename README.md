
![alt tag](http://www.mikejakobsen.com/mike.png)

# A simple JS game

Improving my modularity thinking in JS

# Notes

## Modularity

Higher level of abstraction.

## IIFE

* Anonymous function
* Invoked when declared
* Provides encapsulation
* Reduces global scope pollution

* ಠ_ಠ No dependency management

```Javascript
	(function() {
		
	}());
```

Snippet: iife

### Revealing Module Pattern - Singleton

Scoped too the 
```Javascript
	var scoreboard = function() {
		var message = "Hi!";
		function printMessage() {
			console.log(message);
		}
	return {
		showMessage: printMessage
		}
	}();
```
### Constructor

Only one instance of an IIFE, that's why you use an constructor.

Wrap the iife in a variable.

```Javascript
	var Scoreboard = function () {

	};
```
The function call `()` at the end, is removed, to not run the code immediately.
In stead, the code is run with a constructor.

```Javascript
	var myScoreboard = new Scoreboard();
	myScoreboard.showMessage();
```

#ES6

Native modules

Export

```Javascript
	// scoreboard.js
	export function addResult(newResult) {
		// add new result to list 
	}
	export function updateScoreboard() {
		// update the scoreboard here 
	}
	function somePrivateFunctino() {
		// not part of the api
		// Dosen't export the method
	}
	export var homeTeam = 'FCK';
```

## Named Exports

```Javascript
	// scoreboard.js
	function addResult(newResult) {
		// add new result to list 
	}
	function updateScoreboard() {
		// update the scoreboard here 
	}
	function somePrivateFunctino() {
		// not part of the api
		// Dosen't export the method
	}
	var homeTeam = 'FCK';

	// Export each in a single statement
	export { addResult, updateScoreboard as show, homeTeam };
```

## Import

```Javascript
	// game.js
	import * as scoreboard from './scoreboard.js';
	// The * start specifies, that you want everything within the object
	// sccoreboard is then the name you later on refferences. Fx. scoreboard.update();
	scoreboard.updateScoreboard();

	// game.js
	// If you don't want to import everything
	import { addResult, updateScoreboard } from './scoreboard.js';
	// No import alias/name
	updateScoreboard();

	// With an individual alias
	import { updateScoreboard as update } from './scoreboard.js';
	update();
```
