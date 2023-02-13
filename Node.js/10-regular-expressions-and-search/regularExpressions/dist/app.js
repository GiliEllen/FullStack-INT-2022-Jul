console.log("connected");
var re = /gili/; //create regular expression ehrn scrupt is loaded
var re2 = new RegExp("gili"); // creates regular expression while in runtime = during the
// execution of the code complation and good when you don't knoe the pattern like user input
console.log(re);
console.log(re2);
//simple patterns
//direct match
var string = RegExp("string");
var result = string.test("bowstrings need to be very powerfull");
var result2 = string.test("his hamstrings are in pain");
var result3 = string.test("ringtoss b");
console.log(result);
console.log(result2);
console.log(result3);
//special characters
//more than a direct match
var abc = RegExp("ab*c");
var result4 = abc.test("cbbabbbbcdebc");
console.log(result4);
//Assertions - גבולות
var text = "A quick fox";
var regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord)); // Expected output: Array ["fox"]
var regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords)); // Expected output: Array ["A", "quick", "fox"]
var regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality)); // Expected output: Array ["quick"]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
// Character classes - הבדלים בין סוגי אותיות
var chessStory = "He played the King in a8 and she moved her Queen in c2.";
var regexpCoordinates = /\w\d/g;
console.log(chessStory.match(regexpCoordinates)); // Expected output: Array [ 'a8', 'c2']
var moods = "happy 🙂, confused 😕, sad 😢";
var regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons)); // Expected output: Array ['🙂', '😕', '😢']
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
//Groups and backreferences -קבוצות
var aliceExcerpt = "The Caterpillar and Alice looked at each other";
var regexpWithoutE = /\b[a-df-z]+\b/gi;
console.log(aliceExcerpt.match(regexpWithoutE)); // Expected output: Array ["and", "at"]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences
//Quantifiers - כימות של מידע
var ghostSpeak = "booh boooooooh";
var regexpSpooky = /bo{3,}h/;
console.log(ghostSpeak.match(regexpSpooky)); // Expected output: Array ["boooooooh"]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
//Unicode property escapes
var sentence = "A ticket to 大阪 costs ¥2000 👌.";
var regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation)); // Expected output: Array ["👌"]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
//Summery:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
//Escaping - looking for the regular expression characters
//breaking with backslash \
var aStar = RegExp("a*"); // a*
var result6 = aStar.test("i told you many times you a****l!!");
console.log(result6);
//tasks
// 1. Write a JavaScript program to test the first character of a string is uppercase or not - Easy
// 2. Write a pattern that matches e-mail addresses - medium
// 3. Write a JavaScript program to check a credit card number - hard
