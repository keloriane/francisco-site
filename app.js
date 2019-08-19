const profile = document.getElementById("fbl");
const blueWrapper = document.getElementsByClassName('min-wrapper')



TweenMax.from(profile, 1, { width: 0, delay:.5});
TweenMax.staggerFrom(blueWrapper,0.5,{y:150,opacity:0, delay: 1.5, ease:Power2.easeOut,yoyo:true},0.1)