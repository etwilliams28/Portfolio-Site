


var dot = document.querySelector(".circle");

var tlBallBounce= new TimelineMax({repeat: -1});
var tlBallInit = new TimelineMax();


tlBallBounce.
      to(dot,.7,{y:'-=10', ease: Sine.easeInOut}).
      to(dot,.7,{y:'+=10', ease: Sine.easeInOut});

tlBallInit.set(dot,{transformOrigin:'50% 50%', x:0}).
            from(dot,.6,{ scale:0, ease: Back.easeOut.config(1.5)});