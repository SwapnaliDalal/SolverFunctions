const n = 50 //no of iterations- can be varied

function RK4(f, U0, T, n){
    let t = new Array(n+1).fill(0);
    let u = new Array(n+1).fill(0);
    u[0] = U0
    t[0] = 0
    
    let dt = T/parseFloat(n)
    for(let k=0; k<n; k++){
        t[k+1]= t[k] + dt
        u[k+1]= nextstep(dt,f, u[k], t[k])




        
    }
    let fin_array=[u,t]
    return fin_array
}

function f(u,t){
    return u/10  
}

function nextstep(dt, f ,u, t){
        h=dt
        const k1= h*f(u,t)
        const k2 = h*f(u+k1/2, t+dt/2)
        const k3 = h*f(u+k2/2, t+dt/2)
        const k4 = h*f(u+k1, t+dt)
        const neww = u + (k1+2*k2+2*k3+k4)/6
        
        return neww
}

let fin_array = RK4(f, 0.2,20 ,n)



function setup(fin_array) {
    createCanvas(400, 400);
  }
  
    function draw() {
    background(255);
    
    for(let i=0; i<n; i++){
      circle(map((fin_array[1][i]), 0, 20, 0, width), width-map((fin_array[0][i]), 0, fin_array[0][n-1], 0, width), 2)
    }
      
      noFill();
  stroke(0);
  beginShape();
  for (let x = 0; x < 20; x++) {
    xValue = map(x, 0, 20, 0, width);
    y = 0.2*exp(0.1*x);
    yValue = map(y, 0, 0.2*exp(2), 0, width);
    vertex(xValue, width- yValue);
  }

  endShape();
  
    
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  