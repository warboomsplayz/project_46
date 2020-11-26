var bullet,bg,astro,aimg;
var jedi,jedin,jedis,jedie,jediw,jedine,jedinw,jedise,jedisw;
var lowstd1,lowstd2,lowstd3,sss1,sss2,sss3,hdv1,hdv2,hdv3;
var lowstdd1,lowstdd2,lowstdd3,astrod1,astrod2,astrod3,ssss1,ssss2,ssss3,hdvs1,hdvs2,hdvs3;
var lowstd,lowstdn,lowstds,lowstde,lowstdw,lowstdne,lowstdnw,lowstdse,lowstdsw;
var supersonicshipn,supersonicshipe,supersonicshipw,supersonicships,supersonicshipne,supersonicshipnw,supersonicshipse,supersonicshipsw;
var hdvn,hdve,hdvw,hdvs,hdvne,hdvnw,hdvse,hdvsw;
//var lr;
var edge;
var score = 100;
function preload(){
  jedin = loadImage("jedi ship n.png");
  jedis = loadImage("jedi ship s.png");
  jedie = loadImage("jedi ship e.png");
  jediw = loadImage("jedi ship w.png");
  jedine = loadImage("jedi ship ne.png");
  jedinw = loadImage("jedi ship nw.png");
  jedise = loadImage("jedi ship se.png");
  jedisw = loadImage("jedi ship sw.png");
  lowstdn = loadImage("lowstdship n.png");
  lowstds = loadImage("lowstdship s.png");
  lowstde = loadImage("lowstdship e.png");
  lowstdw = loadImage("lowstdship w.png");
  lowstdne = loadImage("lowstdship ne.png");
  lowstdnw = loadImage("lowstdship nw.png");
  lowstdse = loadImage("lowstdship se.png");
  lowstdsw = loadImage("lowstdship sw.png");
  supersonicshipn = loadImage("supersonic ship n.png");
  supersonicships = loadImage("supersonic ship s.png");
  supersonicshipe = loadImage("supersonic ship e.png");
  supersonicshipw = loadImage("supersonic ship w.png");
  supersonicshipne = loadImage("supersonic ship ne.png");
  supersonicshipnw = loadImage("supersonic ship nw.png");
  supersonicshipse = loadImage("supersonic ship se.png");
  supersonicshipsw = loadImage("supersonic ship sw.png");
  hdvn = loadImage("hdv n.png");
  hdvs = loadImage("hdv s.png");
  hdve = loadImage("hdv e.png");
  hdvw = loadImage("hdv w.png");
  hdvne = loadImage("hdv ne.png");
  hdvnw = loadImage("hdv nw.png");
  hdvse = loadImage("hdv se.png");
  hdvsw = loadImage("hdv sw.png");


  bg = loadImage("space bg.jpg");
  aimg = loadImage("astro.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-105);
 // lr = createSprite((displayWidth-20)/2,(displayHeight-20)/2,20,800)
  jedi = createSprite(displayWidth/2,displayHeight/2,30,30)
  jedi.debug = true
  jedi.addImage(jedie);
  jedi.scale = 0.05
  jedi.setCollider("circle",0,0,1000)
  lowstdd1 = new Group();
  lowstdd2 = new Group();
  lowstdd3 = new Group();
  astrod1 = new Group();
  astrod2 = new Group();
  astrod3 = new Group();
  astrod4 = new Group();
  ssss2 = new Group();
  ssss3 = new Group();
  ssss1 = new Group();
  hdvs2 = new Group();
  hdvs3 = new Group();
  hdvs1 = new Group();
}

function draw() {
  background(bg);  
 edge = createEdgeSprites();
 jedi.velocityX = 0
 jedi.velocityY = 0
  if(keyDown("w")){
    jedi.velocityY = -3
    jedi.addImage(jedin);
  }
    if(keyDown("s")){
    jedi.velocityY = 3
    jedi.addImage(jedis);
  }
    if(keyDown("a")){
    jedi.velocityX = -3
    jedi.addImage(jediw);
  }
    if(keyDown("d")){
    jedi.velocityX = 3
    jedi.addImage(jedie);
  }
   if(keyDown("w")&&(keyDown("a"))){
    jedi.addImage(jedinw);
  }
    if(keyDown("w")&&(keyDown("d"))){
    jedi.addImage(jedine);
  }
    if(keyDown("s")&&(keyDown("a"))){
    jedi.addImage(jedisw);
  }
    if(keyDown("s")&&(keyDown("d"))){
    jedi.addImage(jedise);
  }
    if(keyDown("s")&&(keyDown("d"))&&(keyDown("space"))){
    jedi.velocityX = 5
    jedi.velocityY = 5
  }
    if(keyDown("s")&&(keyDown("a"))&&(keyDown("space"))){
    jedi.velocityX = -5
    jedi.velocityY = 5
  }
    if(keyDown("w")&&(keyDown("d"))&&(keyDown("space"))){
    jedi.velocityX = 5
    jedi.velocityY = -5
  }
    if(keyDown("w")&&(keyDown("a"))&&(keyDown("space"))){
    jedi.velocityX = -5
    jedi.velocityY = -5
  }
    if(keyDown("s")&&(keyDown("space"))){
    //jedi.velocityX = 5
    jedi.velocityY = 5
  }
    if(keyDown("w")&&(keyDown("space"))){
    //jedi.velocityX = 5
    jedi.velocityY = -5
  }
    if(keyDown("d")&&(keyDown("space"))){
    jedi.velocityX = 5
    //jedi.velocityY = 5
  }
    if(keyDown("a")&&(keyDown("space"))){
    jedi.velocityX = -5
    //jedi.velocityY = 5
  }
    if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(lowstdd1)){
    lowstdd1.destroyEach();
    score = score+50
  }

    if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(lowstdd2)){
    lowstdd2.destroyEach();
    score = score+50
  }
    if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(lowstdd3)){
    lowstdd3.destroyEach();
    score = score+50
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(ssss1)){
    ssss1.destroyEach();
    score = score+80
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(ssss2)){
    ssss2.destroyEach();
    score = score+80
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(ssss3)){
    ssss3.destroyEach();
    score = score+80
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(hdvs1)){
    hdvs1.destroyEach();
    score = score+120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(hdvs2)){
    hdvs2.destroyEach();
    score = score+120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(hdvs3)){
    hdvs3.destroyEach();
    score = score+120
  }
    if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))){
    score = score-1
  }
   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(lowstdd3)){
   // lowstdd3.destroyEach();
    score = score-20
  }
   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(lowstdd2)){
  //  lowstdd2.destroyEach();
    score = score-20
  }
   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(lowstdd1)){
   // lowstdd1.destroyEach();
    score = score-20
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(ssss1)){
   // lowstdd1.destroyEach();
    score = score-30
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(ssss2)){
   // lowstdd1.destroyEach();
    score = score-30
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(ssss3)){
   // lowstdd1.destroyEach();
    score = score-30
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(hdvs1)){
   // lowstdd1.destroyEach();
    score = score-60
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(hdvs2)){
   // lowstdd1.destroyEach();
    score = score-60
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(hdvs3)){
   // lowstdd1.destroyEach();
    score = score-60
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(astrod1)){
   // lowstdd1.destroyEach();
    score = score-120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(astrod2)){
   // lowstdd1.destroyEach();
    score = score-120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(astrod3)){
   // lowstdd1.destroyEach();
    score = score-120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(astrod4)){
   // lowstdd1.destroyEach();
    score = score-120
  }

  if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(astrod1)){
    astrod1.destroyEach();
    score = score+180
  }

  if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(astrod2)){
    astrod2.destroyEach();
    score = score+180
  }

  if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(astrod3)){
    astrod3.destroyEach();
    score = score+180
  }

  if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(astrod4)){
    astrod4.destroyEach();
    score = score+180
  }
   jedi.collide(edge)
  lowstd();
//  sss();
 // hdv();
  troieed();
  drawSprites();
  textSize(80);
  fill("white")
  text(score,displayWidth-500,100) 
  
}

  function lowstd(){
    if(frameCount %150===0){
      var x1 = 1
      var x2 = displayWidth-20
      var y1 = 1
      var y2 = displayHeight-105
      var ewx = (displayWidth-20)/2;
      var nsy = (displayHeight-105)/2;
      if(jedi.x>ewx &&jedi.y>nsy){
      //lowstd1 = createSprite(Math.round(random(ewx,x1)),Math.round(random(1,800)),30,30)
        x2 = ewx
        y2 = nsy
      }
      else if (jedi.x>ewx&&jedi.y<nsy){
        y1 = nsy
        x2 = ewx
      }
      else if(jedi.x<ewx&&jedi.y<nsy){
        x1 = ewx
        y1 = nsy
      }
      else if (jedi.x<ewx&&jedi.y>nsy){
        x1 = ewx
        y2 = nsy
      }

      lowstd1 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      lowstd1.addImage(lowstdn)
      lowstd1.scale = 0.1
     lowstdd1.add(lowstd1);
      lowstd2 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      lowstd2.addImage(lowstdn)
      lowstd2.scale = 0.1
     lowstdd2.add(lowstd2);
      lowstd3 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      lowstd3.addImage(lowstdn)
      lowstd3.scale = 0.1
     lowstdd3.add(lowstd3);
      lowstd1.debug = true
      lowstd2.debug = true
      lowstd3.debug = true
  
  /*   if(jedi.y>lowstd1.y){
      lowstd1.y +=10
    }
   if(jedi.y>lowstd2.y){
      lowstd2.y +=10
    }
   if(jedi.y>lowstd3.y){
      lowstd3.y +=10
    }*/

    }
 
  }
 /*             START        function sss(){
    if(frameCount %350===0&&score>200){
      var x1 = 1
      var x2 = displayWidth-20
      var y1 = 1
      var y2 = displayHeight-105
      var ewx = (displayWidth-20)/2;
      var nsy = (displayHeight-105)/2;
      if(jedi.x>ewx &&jedi.y>nsy){
      //lowstd1 = createSprite(Math.round(random(ewx,x1)),Math.round(random(1,800)),30,30)
        x2 = ewx
        y2 = nsy
      }
      else if (jedi.x>ewx&&jedi.y<nsy){
        y1 = nsy
        x2 = ewx
      }
      else if(jedi.x<ewx&&jedi.y<nsy){
        x1 = ewx
        y1 = nsy
      }
      else if (jedi.x<ewx&&jedi.y>nsy){
        x1 = ewx
        y2 = nsy
      }

      sss1 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      sss1.addImage(supersonicshipn)
      sss1.scale = 0.2
     ssss1.add(sss1);
      sss2 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      sss2.addImage(supersonicshipn)
      sss2.scale = 0.2
     ssss2.add(sss2);
      sss3 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      sss3.addImage(supersonicshipn)
      sss3.scale = 0.2
     ssss3.add(sss3);
      sss1.debug = true
      sss2.debug = true
      sss3.debug = true
  
  /*   if(jedi.y>sss1.y){
      sss1.y +=10
    }
   if(jedi.y>sss2.y){
      sss2.y +=10
    }
   if(jedi.y>sss3.y){
      sss3.y +=10
    }

    }
 
    }
  }

    function hdv(){
    if(frameCount %350===0&&score>500){
      var x1 = 1
      var x2 = displayWidth-20
      var y1 = 1
      var y2 = displayHeight-105
      var ewx = (displayWidth-20)/2;
      var nsy = (displayHeight-105)/2;
      if(jedi.x>ewx &&jedi.y>nsy){
      //lowstd1 = createSprite(Math.round(random(ewx,x1)),Math.round(random(1,800)),30,30)
        x2 = ewx
        y2 = nsy
      }
      else if (jedi.x>ewx&&jedi.y<nsy){
        y1 = nsy
        x2 = ewx
      }
      else if(jedi.x<ewx&&jedi.y<nsy){
        x1 = ewx
        y1 = nsy
      }
      else if (jedi.x<ewx&&jedi.y>nsy){
        x1 = ewx
        y2 = nsy
      }

      hdv1 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      hdv1.addImage(hdvn)
      hdv1.scale = 0.2
     hdvs1.add(hdv1);
      hdv2 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      hdv2.addImage(hdvn)
      hdv2.scale = 0.2
     hdvs2.add(hdv2);
      hdv3 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      hdv3.addImage(hdvn)
      hdv3.scale = 0.2
     hdvs3.add(hdv3);
      hdv1.debug = true
      hdv2.debug = true
      hdv3.debug = true  
  
     if(jedi.y>hdv1.y){
      hdv1.y +=10
    }
   if(jedi.y>hdv2.y){
      hdv2.y +=10
    }
   if(jedi.y>hdv3.y){
      hdv3.y +=10
    }

    }
 
    }
  }       */
  function troieed(){
   
    if(frameCount %800===0){
      astroo1 = createSprite(-20,Math.round(random(1,800)),30,30)
      astroo1.addImage(aimg)
      astroo1.scale = 0.1
     astrod1.add(astroo1);
     astroo1.velocityY = Math.round(random(-2,2))
     astroo1.velocityX = 5
      astroo2 = createSprite(displayWidth+30,Math.round(random(1,800)),30,30)
      astroo2.addImage(aimg)
      astroo2.scale = 0.1
     astrod2.add(astroo2);
     astroo2.velocityY = Math.round(random(-2,2))
     astroo2.velocityX = -5
      astroo3 = createSprite(Math.round(random(1,1000)),-20,30,30)
      astroo3.addImage(aimg)
      astroo3.scale = 0.1
     astrod3.add(astroo3);
     astroo3.velocityX = Math.round(random(-2,2))
     astroo3.velocityY = 5
     astroo4 = createSprite(Math.round(random(1,1000)),displayHeight+30,30,30)
      astroo4.addImage(aimg)
      astroo4.scale = 0.1
     astrod4.add(astroo4);
     astroo4.velocityX = Math.round(random(-2,2))
     astroo4.velocityY = -5
      astroo1.debug = true
      astroo2.debug = true
      astroo3.debug = true
      astroo4.debug = true
    }
  }