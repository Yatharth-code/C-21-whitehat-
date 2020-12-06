function isTouching(ob1,ob2){
    if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
      && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
    return true 
  }
  else {
    return false 
  }
  }
  
  function bounce(mr,fr){
    if (mr.x-fr.x<fr.width/2+mr.width/2 
      &&fr.x-mr.x<fr.width/2+mr.width/2){
     mr.velocityX=mr.velocityX*-1
     fr.velocityX=fr.velocityX*-1 
    }
    if (fr.y-mr.y<fr.height/2+mr.height/2
      &&mr.y-fr.y<fr.height/2+mr.height/2){
        mr.veloxityY=mr.velocityY*-1
        fr.velocityY=fr.velocityY*-1
      }
  }