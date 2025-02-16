let my_string = "Hello, World!";

// # 1. toUpperCase() - Converts the string to uppercase
console.log(my_string.toUpperCase());

// # 2. toLowerCase() - Converts the string to lowercase
console.log(my_string.toLowerCase());

// # 3. toTitleCase() - JavaScript does not have a built-in title case function
console.log(my_string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));

// # 4. capitalize() - Similar to title case but for the first word
console.log(my_string.charAt(0).toUpperCase() + my_string.slice(1).toLowerCase());

// # 5. swapcase() - JavaScript does not have a built-in method, so we create one
console.log(my_string.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join(""));

// # 6. casefold() - Not available in JavaScript, but toLowerCase() is equivalent
console.log(my_string.toLowerCase());

// # 7. padStart() - Centers the string (approximation)
console.log(my_string.padStart((20 + my_string.length) / 2).padEnd(20));

// # 8. padEnd() - Left-justifies the string
console.log(my_string.padEnd(20));

// # 9. padStart() - Right-justifies the string
console.log(my_string.padStart(20));

// # 10. padStart() - Pads the string with zeros on the left
console.log(my_string.padStart(20, "0"));

// # 11. match() - Counts occurrences of a substring
console.log((my_string.match(/l/g) || []).length);

// # 12. indexOf() - Finds the first occurrence of a substring
console.log(my_string.indexOf("World"));

// # 13. indexOf() - Same as above
console.log(my_string.indexOf("World"));

// # 14. lastIndexOf() - Finds the last occurrence of a substring
console.log(my_string.lastIndexOf("l"));

// # 15. lastIndexOf() - Same as above
console.log(my_string.lastIndexOf("l"));

// # 16. startsWith() - Checks if the string starts with a substring
console.log(my_string.startsWith("Hello"));

// # 17. endsWith() - Checks if the string ends with a substring
console.log(my_string.endsWith("World!"));

// # 18. test() - Checks if the string contains only alphabets (regex needed)
console.log(/^[a-zA-Z]+$/.test(my_string));

// # 19. test() - Checks if the string contains only digits
console.log(/^\d+$/.test(my_string));

// # 20. test() - Checks if the string contains only alphanumeric characters
console.log(/^[a-zA-Z0-9]+$/.test(my_string));

// # 21. test() - Checks if the string contains only whitespace
console.log(/^\s+$/.test(my_string));

// # 22. toLowerCase() - Checks if the string is in lowercase
console.log(my_string === my_string.toLowerCase());

// # 23. toUpperCase() - Checks if the string is in uppercase
console.log(my_string === my_string.toUpperCase());

// # 24. istitle() - Checks if the string is in title case
console.log(my_string === my_string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));

// # 25. split() - Splits the string into an array
console.log(my_string.split(","));

// # 26. split() - Splits the string from the right
console.log(my_string.split(",").slice(0, -1).concat(my_string.split(",").slice(-1)));

// # 27. split() - Works like Python partition()
console.log([my_string.split(",")[0], ",", my_string.split(",").slice(1).join(",")]);

// # 28. split() - Works like Python rpartition()
let parts = my_string.split(",");
console.log([parts.slice(0, -1).join(","), ",", parts.slice(-1)[0]]);

// # 29. join() - Joins an array into a string
console.log(["Hello", "World!"].join(","));

// # 30. replace() - Replaces a substring
console.log(my_string.replace("World", "Universe"));

// # 31. trim() - Removes leading and trailing spaces
console.log(my_string.trim());

// # 32. trimStart() - Removes leading spaces
console.log(my_string.trimStart());

// # 33. trimEnd() - Removes trailing spaces
console.log(my_string.trimEnd());

// # 34. encodeURI() - Encodes the string
console.log(encodeURI(my_string));

// # 35. decodeURI() - Decodes the encoded string
console.log(decodeURI(encodeURI(my_string)));
