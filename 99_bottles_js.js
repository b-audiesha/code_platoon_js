function beerSong() {
let bottles;
  let bottlesLeft;
  for (i = 99; i >= 1; i--) {
    if (i === 1) {
      bottles = "bottle";
      bottlesLeft = "No bottles of beer on the wall!";
    } else {
      bottles = "bottles";
      bottlesLeft = i - 1 + " bottles of beer on the wall!";
    } console.log(i+ " " + bottles + " of beer on the wall,");
    console.log(i+ " " + bottles + " of beer,");
    console.log("Take one down, pass it around,");
    console.log(bottlesLeft);
  }

}
console.log(beerSong());

if (typeof document.documentElement.animate === 'function') {
  var ps = [].slice.call(document.querySelectorAll('p'));
  var ball = document.getElementById('bouncer');
  var width = ball.offsetWidth / 2;
  var y = ball.querySelector('.y');
  var RATE = .9;
  var syllables;

  var score = getScore();

  ps.forEach(function(p) {
    var split = p.innerHTML.split(' ');
    for (var i = 0, l = split.length; i < l; ++i) {
      if (split[i].indexOf('<') !== 0) {
        split[i] = '<span>' + split[i] + '</span>';
      }
    }
    p.innerHTML = split.join(' ');
  });

  playByScore();
} else {

}

function playByScore() {
  syllables = [].slice.call(document.querySelectorAll('span'));

  var duration = score[0].duration * 2;
  var starter = syllables[score[0].index].getBoundingClientRect();
  console.log(starter)
  syllables[score[0].index].classList.add('bounced');

  var latest = ball.animate([
    { transform: 'translate(' +  (starter.left - width + starter.width/2) +'px, ' + (starter.top) + 'px) scale(0)', opacity: 1},
    { transform: 'translate(' +  (starter.left - width + starter.width/2) +'px, ' + (starter.top) + 'px) scale(1)', opacity: 1}
  ], {
    duration: duration,
    fill: 'forwards',
    easing: 'ease-in-out'
  });
  latest.playbackRate = RATE;
  console.log(latest)
  animateY(duration);

  latest.onfinish = function() {
    doNextAnimation(1, starter)
  };
}

function doNextAnimation(i, prev) {
  var beat = score[i];

  if (!beat) {
    theEnd(prev);
    return false;
  }

  var next = syllables[beat.index].getBoundingClientRect();
  bounceBall(prev, next, beat).onfinish = function() {
    doNextAnimation((i + 1), next);
  };
}

function animateY(duration, delay) {
  y.animate([
    {transform: 'translateY(-2vmin) scaleY(.8)', offset: 0},
    {transform: 'translateY(-3vmin) scaleY(1)', offset: .2},
    {transform: 'translateY(-7vmin) scaleY(1)', offset: 1}
  ], {
    duration: duration / 2,
    iterations: 2,
    direction: 'alternate',
    easing: 'ease-in-out',
    fill: 'forwards',
    delay: delay || 0
  }).playbackRate = RATE;
}

function bounceBall(prev, next, beat) {
  syllables[beat.index].classList.add('bounced');
  var duration = beat.duration * .75;
  animateY(duration);

  var current = ball.animate([
    { transform: 'translate(' + (prev.left - width + prev.width/2) +'px, ' + (prev.top) + 'px)'},
    { transform: 'translate(' +  (next.left - width + next.width/2) +'px, ' + (next.top) + 'px)'}
  ], {
    duration: duration,
    fill: 'forwards',
    easing: 'ease-in-out',
    delay: 0
  });
  current.playbackRate = RATE;
  return current;
}

function theEnd(prev) {
  ball.animate([
    {transform: 'translate(' +  (prev.left - width + prev.width/2) +'px, ' + (prev.top) + 'px) scale(1)'},
    {transform: 'translate(' +  (prev.left - width + prev.width/2) +'px, ' + (prev.top) + 'px) scale(0)'}
  ], {
    duration: 500,
    easing: 'ease-in-out',
    fill: 'forwards'
  });

  y.animate([
    {transform: 'translateY(-15px) scaleY(.8)'},
    {transform: 'translateY(-15px) scaleY(1)'}
  ], {
    duration: 100,
    easing: 'ease-in-out',
    fill: 'forwards'
  })
}
function getScore() {
  var tmbg = [
    { duration: 200, index: 0 },
    { duration: 250, index: 1 },
    { duration: 250, index: 2 },
    { duration: 250, index: 3 },
    { duration: 500, index: 4 },
    { duration: 500, index: 5 },
    { duration: 500, index: 6 },
    { duration: 500, index: 7 },
    { duration: 1000, index: 8 },

    { duration: 250, index: 9 },
    { duration: 250, index: 10 },
    { duration: 250, index: 11 },
    { duration: 500, index: 12 },
    { duration: 500, index: 13 },
    { duration: 500, index: 14 },
    { duration: 500, index: 15 },
    { duration: 1000, index: 16 },

    { duration: 250, index: 17 },
    { duration: 250, index: 18 },
    { duration: 250, index: 19 },
    { duration: 500, index: 20 },
    { duration: 500, index: 21 },
    { duration: 500, index: 22 },
    { duration: 500, index: 23 },
    { duration: 500, index: 24 },
    { duration: 500, index: 25 },
    { duration: 500, index: 26 },

    { duration: 250, index: 27 },
    { duration: 250, index: 28 },
    { duration: 500, index: 29 },
    { duration: 500, index: 30 },
    { duration: 250, index: 31 },
    { duration: 500, index: 32 },
    { duration: 250, index: 33 },
    { duration: 500, index: 34 },
    { duration: 500, index: 35 },
    { duration: 250, index: 36 },
    { duration: 1000, index: 37 },

    { duration: 250, index: 38 },
    { duration: 500, index: 39 },
    { duration: 250, index: 40 },
    { duration: 500, index: 41 },
    { duration: 500, index: 42 },
    { duration: 500, index: 43 },
    { duration: 650, index: 44 },
    { duration: 800, index: 45 },
    { duration: 800, index: 46 },
    { duration: 1000, index: 46 },
    { duration: 1200, index: 46 },
    { duration: 1400, index: 46 } //*/
  ];
  return tmbg;
}
