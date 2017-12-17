var bullets = new Container(); 

function shoot() 
{ 
    var b = new Bitmap(bltImg); 
      
    b.x = ship.x + 13; 
    b.y = ship.y - 20; 
      
    bullets.addChild(b); 
    stage.update(); 
}