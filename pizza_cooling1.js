const n = 500//no of iterations- can be varied
const h = 1/450
const Ts = 20
const T = 10*n

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
    return -1*h*(u-Ts)
}

let fin_array = HeunsMethod(f, 200 , T ,n)

console.log("Final temp is", fin_array[0][n])



function setup(fin_array) {
    createCanvas(400, 400);
  }
  
    function draw() {
    background(255);
    
    for(let i=0; i<n; i++){
      circle(map((fin_array[1][i]), 0, T, 0, width), width-map((fin_array[0][i]) , fin_array[0][n-1],200, 0, width), 2)
    }
    
    }