//calculate degree
function clock(){
    var d, h, m, s;
    d = new Date;
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    //move hands
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    //display time
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    //call every sec
    setTimeout(clock, 1000);
};
//transform attribute
function setAttr(id, val){
    var v = 'rotate(' + val + ',70,70)';
    document.getElementById(id).setAttribute('transform', v)
};

window.onload=clock;