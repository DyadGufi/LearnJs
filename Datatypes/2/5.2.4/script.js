'use strict';

let i = 0;
/*
    i никогда не будет равен именно 10, потому что из-за
    потери точности она будет всегда около 10, но не 10.
    И запросто перешагнет 10 и пойдет дальше увеличиваться до бесконечности
    и отдавать гигабайт за гигабайтом оперативной памяти браузеру
*/
while(i != 10) {
    i += 0.2;
    console.log(i);
}

//после запуска этого скрипта у меня включился кулер, завис браузер, 
//а диспетчер задач показывал, как потребление 3гб оперативной памяти браузером только росло и росло
//в итоге так и не получилось его запустить, как посоветовали в решении задачи.