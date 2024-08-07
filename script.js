
function UpdateTime() {
    const currentyear =new Date().getFullYear();
    const bday = new Date(`August 9 ${currentyear} 00:00:00`)
    const currentdate = new Date()
    const diff = bday-currentdate
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24
    const m = Math.floor(diff/1000/60)%60
    const s = Math.floor(diff/1000)%60

  
    
    
    const days = document.getElementById("days").innerHTML=d
    const hours = document.getElementById("hour").innerHTML=h
    const minutes = document.getElementById("minutes").innerHTML=m
    const secounds = document.getElementById("seconds").innerHTML= s



    // console.log(d,h,m,s);


    
}

setInterval(UpdateTime,1000)