
const U0= Math.exp(-16)
const T= 10


function ForwardEuler(f, U0, n, dt){
    
    let t = new Array(n+1).fill(0);
    let u = new Array(n+1).fill(0);
    u[0] = U0
    t[0] = 0
    
    
    for(let k=0; k<n; k++){
        t[k+1]= t[k] + dt
        u[k+1]= u[k]+ dt*f(u[k],t[k])
    }
    let fin_array=[u,t]
    return fin_array
}

function HeunsMethod(f, U0, n, dt){
    let t = new Array(n+1).fill(0);
    let u = new Array(n+1).fill(0);
    u[0] = U0
    t[0] = 0
    
    
    for(let k=0; k<n; k++){
        t[k+1]= t[k] + dt
        utemp= u[k]+ dt*f(u[k],t[k])
        u[k+1]= u[k]+ 0.5*dt*f(u[k],t[k]) + 0.5*dt*f(utemp,t[k+1])
    }
    let fin_array=[u,t]
    return fin_array
}


function RK4(f, U0, n, dt){
    let t = new Array(n+1).fill(0);
    let u = new Array(n+1).fill(0);
    u[0] = U0
    t[0] = 0
    
  
    for(let k=0; k<n; k++){
        t[k+1]= t[k] + dt
        u[k+1]= nextstep(dt,f, u[k], t[k], dt)

        
    }
    let fin_array=[u,t]
    return fin_array
}

function nextstep(dt, f ,u, t, dt){
    h=dt
    const k1= h*f(u,t)
    const k2 = h*f(u+k1/2, t+dt/2)
    const k3 = h*f(u+k2/2, t+dt/2)
    const k4 = h*f(u+k1, t+dt)
    const neww = u + (k1+2*k2+2*k3+k4)/6
    
    return neww
}

function f(u,t){
    return -2*(t-4)*u
}




function setup() {
    createCanvas(400, 400);
  background(255);
  frameRate(1)
  }
  let k=0
function draw() {
dt_array=[0.3,0.25,0.1,0.05,0.01,0.001]

let dt = dt_array[k]
let n = parseInt(T/dt)

k+=1
  console.log(k)
  console.log(dt)
  console.log(n)
    let fin_array1 = ForwardEuler(f, U0 ,n, dt)
let fin_array2 = HeunsMethod(f, U0 ,n, dt)
let fin_array3 = RK4(f, U0 ,n, dt)
console.log(fin_array2)
    noStroke()
    
    
    
    for(let i=0; i<n-1; i++){
        fill(255,0,0)
        circle(map((fin_array1[1][i]), 0, 10, 0, width), width-map((fin_array1[0][i]), 0, exp(-36), 0, width), 3)
fill(0,255,0)
        circle(map((fin_array2[1][i]), 0, 10, 0, width), width-map((fin_array2[0][i]), 0, exp(-36), 0, width), 2)
fill(0,0,255)
        circle(map((fin_array3[1][i]), 0, 10, 0, width), width-map((fin_array3[0][i]), 0, exp(-36), 0, width), 2)
    }

    if(k==5){
        noLoop()
      }
      
    }
