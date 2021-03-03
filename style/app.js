/* USEFUL FUNCTIONS */

function dec2hex(a) {
  a = parseInt(a).toString(16);
  return a.length<2?"0"+a:a;
}

function randomColor()  {
  var r, g, b;
  r = dec2hex(Math.floor(Math.random()*256));
  g = dec2hex(Math.floor(Math.random()*256));
  b = dec2hex(Math.floor(Math.random()*256));
  return '#'+r+g+b;
}

function rand(max) {
  return Math.floor(Math.random()*max);
}

//jQuery shuffle plugin
(function($){
  $.fn.shuffle = function() {
    return this.each(function(){
      var items = $(this).children();
      return (items.length)
        ? $(this).html($.shuffle(items))
        : this;
    });
  }

  $.shuffle = function(arr) {
    for(
      var j, x, i = arr.length; i;
      j = parseInt(Math.random() * i),
      x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  }
})(jQuery);


//console.profile();

/* PAGELOAD INITIALIZATION */

$(document).ready(function(){

  $("#fakeCntrls").mouseenter(function(){
    $("#ttlCntrls").css('z-index',801);
  });
  $("#ttlCntrls").mouseleave(function(){
    $(this).css('z-index',11);
  });
  $("#ttlCntrls").click(function(){

    if ($("#hiddenCntrls").children(':first').is(':hidden'))  {
      $("#hiddenCntrls li").fadeIn();
    } else  {
      $("#hiddenCntrls li").fadeOut();
      $('#pages > div').fadeOut();
    }
  });

  $("#hiddenCntrls li").click(function(){
    lol = $('#page'+$(this).attr('rel'));
    $('#pages > div').not(lol).hide();
    lol.fadeIn();
  });


  body = $('body');

  lo = $("#LOBLAST");
  loRotIndex = 0;
  loRotDir = 1;

  dworgle = $("#dworgle");
  dwargle = $("#dwargle");

  space0 = $("#starsNear");
  space1 = $("#heartNebula");

  grass = $("#grass");

  buttBarrIndex = 0;
  barr0 = $("#f0");
  barr1 = $("#f1");
  barr2 = $("#f2");
  barr3 = $("#f3");
  barr4 = $("#f4");

  RasterUpdates();
  ButtBarrThrobbs();
  LOBLASTer();
  LOBLASTrotate();

  Genres();

  Missiles();

});




function RasterUpdates()  {
  bodyPos = body.offset();
  bodyW = body.width();
  bodyH = body.height();
  UpdateMissileZ();
  ButtBarrColours();
  setTimeout('RasterUpdates()',1000/15);
}


function ButtBarrColours()  {
  barr0.css('background-color',function()  {
    return barr1.css('background-color');  });
  barr1.css('background-color',function()  {
    return barr2.css('background-color');  });
  barr2.css('background-color',function()  {
    return barr3.css('background-color');  });
  barr3.css('background-color',function()  {
    return barr4.css('background-color');  });
  barr4.css('background-color',randomColor());

  buttBarrIndex--;
  if (buttBarrIndex<0) buttBarrIndex=4;
  buttBarrI = buttBarrIndex
  eval('barr'+buttBarrI).css('z-index',400);
  buttBarrI+=2;
  if (buttBarrI>4) buttBarrI=0;
  eval('barr'+buttBarrI).css('z-index',500);
}


function ButtBarrThrobbs()  {
  var loPos = lo.offset();
  var skPos = $("#skyline").offset();
  var grassHeight = grass.height();
  var skyHeight = $("#skyline").height();
  var height;
  if (loPos.top>skPos.top) {
    height = rand(25)+50;
    if (grassHeight<105)  grassHeight = grassHeight + 3;
    if (skyHeight>-50) skyHeight = skyHeight - 25;
  }
  else {
    height = rand(10)+5;
    if (grassHeight>60)  grassHeight = grassHeight - 1;
    if (skyHeight<250) skyHeight = skyHeight + 10;
  }
  $("#grass").css({'margin-top':-grassHeight,'height':grassHeight});
  $("#f"+rand(5)).animate({height:height},100,function()
    { ButtBarrThrobbs();  });
  $("#skyline").animate({height:skyHeight},100);
}


function LOBLASTrotate()  {
  var loPos = lo.offset();
  var loW = lo.width();
  var loH = lo.height();
  var loLeft = loPos.left+(loW/2);
  var loTop = loPos.top+(loH/2);
  var bodyW = $("body").width();
  var bodyH = $("body").height();
  //var deg = -(-(bodyW/2)+loPos)*0.1;
  var deg = -((loLeft/bodyW)-0.5);
  deg = deg * (loTop/bodyH) + deg;
  deg = deg*90;
  loRotIndex+=loRotDir;
  if (loRotIndex>360) loRotDir = -1;
  if (loRotIndex<-360) loRotDir = 1;
  var degv = loRotIndex*(Math.sin((loRotIndex/100)*3.141982));
  deg = deg + degv;
  //barr0.text(degv);
  //barr1.text(loRotIndex);
  //barr2.text(deg);
  //$("#f0").text(deg);
  lo.css('-webkit-transform','rotate('+deg+'deg)');
  lo.css('-moz-transform','rotate('+deg+'deg)');
  lo.css('-o-transform','rotate('+deg+'deg)');
  setTimeout('LOBLASTrotate()',1000/12);
}

function LOBLASTer()  {

  var bodyW = $('body').width();
  var bodyH = $('body').height();

  // get new LOBLAST position
  var newX = rand(bodyW-lo.width()+500)-250;
  var newY = rand(bodyH-lo.height()+500)-250;
  var time = rand(500)+500;

  var ratX = (newX+250) / (bodyW-lo.width()+500)
  var ratY = (newY+250) / (bodyH-lo.height()+500)

  // adjust heartNebula
  nebulaX = - Math.floor( 30 * ratX );
  nebulaY = - Math.floor( 20 * ratY );

  lo.animate({
    left: newX,
    top: newY
  },
  time,
  function()  {
    LOBLASTer();
  });
  space0.animate({left: (nebulaX*2)+'%', top: (nebulaY*6)+'%'},time);
  space1.animate({left: nebulaX+'%', top: nebulaY*4+'%'},time);
}


function Missiles() {
  switch(rand(2)) {
    case 0:
      Dworgle();
      break
    case 1:
      Dwargle();
      break;
  }
}


function Dworgle() {
  var grPos = grass.offset();
  var bodyW = $('body').width();
  var bodyH = $('body').height();

  switch(rand(3)) {
  case 0:
    dworgle.animate({
      left: [bodyW+rand(1000), 'easeInQuad'],
      top: [grPos.top+100, 'easeOutBounce'],
      width: 128,
      height: 192
      }, rand(1000)+2000, 'linear',function(){
        $(this).css({top:-50,left:-50,width:8,height:12});
        Missiles();
      }
    );
    break;
  case 1:
    dworgle.animate({
      left: [-rand(1000)-128, 'easeInQuad'],
      top: [grPos.top+100, 'easeOutBounce'],
      width: 128,
      height: 192
      }, rand(1000)+2000, 'linear',function(){
        $(this).css({top:-50,left:bodyW,width:8,height:12});
        Missiles();
      }
    );
    break;
  case 2:
    dworgle.css({top:-50,left:bodyW*0.25, width:16,height:24});
    Missiles();
    break;
  case 3:
    dworgle.css({top:-50,left:bodyW*0.75, width:16,height:24});
    Missiles();
    break;
  }
}

function Dwargle() {
  var grPos = $('#grass').offset();
  var bodyW = $('body').width();
  var bodyH = $('body').height();

  switch(rand(3)) {
  case 0:
    dwargle.animate({
      left: [bodyW+rand(1000), 'easeInQuad'],
      top: [grPos.top+100, 'easeOutBounce'],
      width: 128,
      height: 192
      }, rand(1000)+2000, 'linear',function(){
        $(this).css({top:-50,left:bodyW,width:8,height:12});
        Missiles();
      }
    );
    break;
  case 1:
    dwargle.animate({
      left: [-rand(1000)-128, 'easeInQuad'],
      top: [grPos.top+100, 'easeOutBounce'],
      width: 128,
      height: 192
      }, rand(1000)+2000, 'linear',function(){
        $(this).css({top:-50,left:bodyW,width:8,height:12});
        Missiles();
      }
    );
    break;
  case 2:
    dwargle.css({top:-50,left:bodyW*0.33, width:16,height:24});
    Missiles();
    break;
  case 3:
    dwargle.css({top:-50,left:bodyW*0.66, width:16,height:24});
    Missiles();
    break;
  }

}

function UpdateMissileZ() {
  var dwoPos = dworgle.offset();
  var dwaPos = dwargle.offset();
  //$("#f0").text(bodyW);
  var z1 = (Math.abs(dwoPos.left)/bodyW)*800;
  var z2 = (Math.abs(bodyW-dwaPos.left)/bodyW)*700;

  dworgle.css('z-index',Math.floor(z1-rand(z1/5)));
  dwargle.css('z-index',Math.floor(z2));
}


function Genres() {
  var genres = $('li.genre');
  setInterval( function() {
    genres = $('li.genre').shuffle();
    no = rand(genres.length);
    genres.slice(no-1,no).fadeIn(800, function()  {
      $(this).fadeOut(2500);
    });
  }, 1000 );
}

//console.profileEnd();