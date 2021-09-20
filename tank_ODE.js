const T = 100
const n = T/10
const g = 9.81
const r = 0.01
const R = 0.2
const q = (-1)*Math.pow((r/R),2)

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
        console.log(u[k])
        if(u[k]<0){
           console.log(t[k])
            break 
            
        }
    }
      
    let fin_array=[u,t]
    return fin_array
}

function f(u,t){
    return q*Math.pow((2*g*u),0.5)
}

let fin_array = HeunsMethod(f, 1 , T ,T/10)




function setup(fin_array) {
    createCanvas(400, 400);
  }
  
    function draw() {
    background(255);
    
    for(let i=0; i<n; i++){
      circle(map((fin_array[1][i]), 0, T, 0, width), width-map((fin_array[0][i]), 0, fin_array[0][0], 0, width), 2)
    }

}