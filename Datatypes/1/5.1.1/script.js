'use strict';

//При строгом режиме выдает ошибку. Поэтому при нем мы не можем создать свойство строке
let str = 'Hello';

str.test = 5;

alert(str.test);