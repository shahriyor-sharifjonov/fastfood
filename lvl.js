const lvl = document.querySelector(".header__timer-extra");

function lvlUp() {
  let time = 50
  lvl.innerHTML++;
  let prevLvl = lvl.innerHTML
  if(prevLvl >= 99) time = 1000
  else if(prevLvl > 95) time = 500
  else if(prevLvl > 85) time = 250
  else if(prevLvl > 75) time = 150
  else if(prevLvl > 50) time = 75
  
  if(lvl.innerHTML >= 100) return
  
  setTimeout(lvlUp, 50);
  
}
lvlUp()

// function lvlUp() {
//   lvl.innerHTML++;
//   if(lvl.innerHTML >= 99) setTimeout(lvlUp, 1000);
//   else if(lvl.innerHTML > 95) setTimeout(lvlUp, 500);
//   else if(lvl.innerHTML > 85) setTimeout(lvlUp, 250);
//   else if(lvl.innerHTML > 75) setTimeout(lvlUp, 150);
//   else if(lvl.innerHTML > 50) setTimeout(lvlUp, 75);
//   else setTimeout(lvlUp, 50);
  
//   if(lvl.innerHTML >= 100) return
  
//   setTimeout(lvlUp, time);
// }
// lvlUp()