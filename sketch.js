const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var ball2
var g1,g2,g3,g4;
var dv1,dv2,dv3,dv4,dv5,dv6,dv7
var particles = [];
var plinkos   = [];
var divisions = [];
var divisionHeight =300;
var D
var b 
var ball3
function setup() {
  createCanvas(400,700);
  engine = Engine.create();
  world = engine.world;
  g1 =new Ground(2,350,5,700)
  g2=new Ground(200,655,400,5)
  g3=new Ground(395,350,5,700)
  dv1=new Divider2(5,575,3,150)
  dv2=new Divider2(70,575,3,150)
  dv3=new Divider2(135,575,3,150)
  dv4=new Divider2(195,575,3,150)
  dv5=new Divider2(255,575,3,150)
  dv6=new Divider2(320,575,3,150)
  dv7=new Divider2(390,575,3,150)
  b=new Divider2(198,650,390,5)
  D=new Divider(0,200,10,10)
  ball3=new Ball(200,10,5,5)
  for (var k=8;k<=width;k=k+25){
    plinkos.push(new Divider(k,50,0,divisionHeight))
  
  }
  for (var S=0;S<=width;S=S+25){
    plinkos.push(new Divider(S,100,0,divisionHeight))
  
  }
  for (var A=8;A<=width;A=A+25){
    plinkos.push(new Divider(A,150,0,divisionHeight))
  
  }
  for (var B=0;B<=width;B=B+25){
    plinkos.push(new Divider(B,200,0,divisionHeight))
  
  }
  for (var C=8;C<=width;C=C+25){
      divisions.push(new Divider(C,250,0,divisionHeight))
  
  }
  for (var D=0;D<=width;D=D+25){
    divisions.push(new Divider(D,300,0,divisionHeight))

}
for (var E=8;E<=width;E=E+25){
  divisions.push(new Divider(E,350,0,divisionHeight))

}
for (var F=0;F<=width;F=F+25){
  divisions.push(new Divider(F,400,0,divisionHeight))

}

}
function draw() {
  background(0);  
  if (frameCount%60===0){
    particles.push(new Ball(random(30,600),10,10));
  }
  for (var i =0 ;i < particles.length;i++){
    particles[i].display()
  
   }
   for (var k =0 ;k < plinkos.length;k++){
    plinkos[k].display()
   
   }
   for (var S =0 ;S < plinkos.length;S++){
    plinkos[S].display()
   
   }
   for (var A =0 ;A < plinkos.length;A++){
    plinkos[A].display()
   
   }
   for (var B =0 ;B < plinkos.length;B++){
    plinkos[B].display()
   
   }
   for (var C =0 ;C < divisions.length;C++){
    divisions[C].display()
   
   }
   for (var D =0 ;D < divisions.length;D++){
    divisions[D].display()
   
   }
   for (var E =0 ;E < divisions.length;E++){
    divisions[E].display()
   
   }
   for (var F =0 ;F < divisions.length;F++){
    divisions[F].display()
  
   }

  g1.display()
  g2.display()
  g3.display()
  dv1.display()
  dv2.display()
  dv3.display()
  dv4.display()
  dv5.display()
  dv6.display()
  dv7.display()
  b.display()
  ball3.display()
}
 