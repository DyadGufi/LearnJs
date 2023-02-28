'use strict';

alert(Boolean(5 > 4)); //true
alert(Boolean("ананас" > "яблоко")); // false
alert(Boolean("2" > "12")); //true
alert(Boolean(undefined == null)); //true
alert(Boolean(undefined === null)); //false
alert(Boolean(null == "\n0\n")); // false
alert(Boolean(null === +"\n0\n")); // false