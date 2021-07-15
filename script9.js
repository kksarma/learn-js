/**
 * The JS engine first hoists variables (to undefined). then it hoists function declarations.
 * 1) Variable assignment takes precedence over function declaration
 * 2) Function declarations take precedence over variable declarations
 */

function parent() {
    function hoisted() {
		return "I'm a function.";
	}
	var hoisted = "I'm a variable";
	return hoisted();
}
console.log(parent());