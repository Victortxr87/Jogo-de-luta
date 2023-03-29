let log = new Log(document.querySelector('.log'));



let char = new knight ('Victor');
let monster = new BigMonster ('Victor');


const stage = new Stage(

char,
monster,
document.querySelector('#char'),
document.querySelector('#monster'),
log

);


stage.start();