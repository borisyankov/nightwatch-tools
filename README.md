# nightwatch-tools
Tools and helpers for Nightwatch.js

Install

    npm install nightwatch-tools

Within app:

var NWTools = require('nightwatch-tools');

Randoms
###

Random string:

    var str = NWTools.randomString(10, 'abcdef');

Returns a random string containing the letters 'a', 'b', 'c', 'd', 'e' or 'f' and consisting of 10 letters.

    var str = NWTools.randomStringLowercase(20);

Generates a random string containing all lowercase letters, 20 characters long.

    var email = NWTools.randomEmail();

Generates a valid random email.

Placeholder Text
###

    TEXT.LOREM_IPSUM
    TEXT.CYRILLIC
    TEXT.GREEK
    TEXT.HINDI
    TEXT.CHINESE
    TEXT.JAPANESE
    TEXT.ARABIC
    TEXT.HEBREW
