const n = 64 //no of iterations- can be varied

function RK4(f, U0, T, n){
    let t = new Array(n+1).fill(0);
    let u = new Array(n+1).fill(0);
    u[0] = U0
    t[0] = 0
    
    let dt = T/parseFloat(n)
    for(let k=0; k<n; k++){
        t[k+1]= t[k] + dt
        u[k+1]= nextstep(dt,f,n, u[k], t[k])
  
    }
  
  
    let fin_array=[u,t]
    return fin_array
}


function ForwardEuler(f, U0, T, n){
    let t = new Array(n+1).fill(0);
    let u = new Array(n+1).fill(0);
    u[0] = U0
    t[0] = 0
    
    let dt = T/parseFloat(n)
    for(let k=0; k<n; k++){
        t[k+1]= t[k] + dt
        u[k+1]= u[k]+ dt*f(u[k],t[k])
    }
    let fin_array=[u,t]
    return fin_array
}



function f(u,t){
    return 1/(2*(u-1)) 
}

function nextstep(dt,f,n, u, t){
        const h = dt
        const k1= h*f(u,t)
        const k2 = h*f(u+k1/2, t+dt/2)
        const k3 = h*f(u+k2/2, t+dt/2)
        const k4 = h*f(u+k1, t+dt)
        const neww = u + (k1+2*k2+2*k3+k4)/6
        
        return neww
}

let fin_array1 = RK4(f, 1.03,4 ,n)
let fin_array2 = ForwardEuler(f, 1.03,4 ,n)



function setup(fin_array1, fin_array2) {
    createCanvas(400, 400);
  }
  
    function draw() {
    background(255);
    
      fill(255,0,0)
      noStroke()
    for(let i=0; i<n; i++){
      circle(map((fin_array1[1][i]), 0, 4, 0, width), width-map((fin_array1[0][i]), 0, fin_array1[0][n-1], 0, width), 2)
    }
      fill(0,0,255)
      
      for(let i=0; i<n; i++){
      circle(map((fin_array2[1][i]), 0, 4, 0, width), width-map((fin_array2[0][i]), 0, fin_array2[0][n-1], 0, width), 2)
    }
      
      noFill();
  stroke(0);
  beginShape();
  for (let x = 0; x < 4; x=x+0.001) {
    xValue = map(x, 0, 4, 0, width);
    y = 1+Math.pow(x+0.031,0.5);
    yValue = map(y, 0, 3.0074, 0, width);
    vertex(xValue, width- yValue);
  }

  endShape();
  
    
    }