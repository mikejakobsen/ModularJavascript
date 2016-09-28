
![alt tag](http://www.mikejakobsen.com/mike.png)

# A simple JS game

Improving my modularity thinking in JS

# Notes

## Modularity

Higher level of abstraction.

## IIFE

Anonymous function
Invoked when declared
Provides encapsulation
Reduces global scope pollution

No dependency management

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

