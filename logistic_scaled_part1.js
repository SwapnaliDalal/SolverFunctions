

const n = 100 //no of iterations


function HeunsMethod(f, U0, T, n){
    let t = new Array(n+1).fill(0);
    let u = new Array(n+1).fill(0);
    u[0] = U0
    t[0] = 0
    
    let dt = T/parseFloat(n)
    for(let k=0; k<n; k++){
        t[k+1]= t[k] + dt
        utemp= u[k]+ dt*f(u[k],t[k])
        u[k+1]= u[k]+ 0.5*dt*f(u[k],t[k]) + 0.5*dt*f(utemp,t[k+1])
    }
    let fin_array=[u,t]
    return fin_array
}

function f(u,t){
    return u*(1-u)
}



let fin_array = HeunsMethod(f, 0.05,1 ,n) //alpha=1


function setup(fin_array) {
    createCanvas(400, 400);
  }
  
    function draw() {
    background(255);
    
    for(let i=0; i<n; i++){
      noStroke()
      fill(0,0,255)
      circle(map((fin_array[1][i]), 0,1, 0, width), width-map((fin_array[0][i])*100, 0,500, 0, width), 2)
    }
    
    for(let i=0; i<n; i++){
      noStroke()
      fill(255,0,0)
        circle(map((fin_array[1][i]), 0, 1, 0, width), width-map((fin_array[0][i])*500, 0, 500, 0, width), 2)
    }
      
    for(let i=0; i<n; i++){
      noStroke()
      fill(0,255,0)
        circle(map((fin_array[1][i]), 0, 1, 0, width), width-map((fin_array[0][i])*1000, 0, 500, 0, width), 2)
    
    } } 