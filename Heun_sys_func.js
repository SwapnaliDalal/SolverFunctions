const n = 100 //no of iterations- can be varied
const U0 = [2,3]
const dt = 0.05

function ForwardEuler(f, U0, dt, n){
    let t = new Array(n+1).fill(0);
    let u = new Array(n+1).fill(new Array(2).fill(0));
    u[0] = U0
    t[0] = 0
    var store=[]
  
    
    
    let T = dt*n

    for(let k=0; k<n; k++){
        var subb=[]
        t[k+1]= t[k] + dt
        let functionvalue = f(u[k][0], u[k][1],t[k])
        
//to edit?
        u[k+1][0]= u[k][0]+ dt*functionvalue[0]//+ 0.5*dt*f((u[k][0]+ dt*functionvalue[0]),(u[k][0]+ dt*functionvalue[0]),t[k+1])
        u[k+1][1]= u[k][1]+ dt*functionvalue[1]//+ 0.5*dt*f(u[k][1]+ dt*functionvalue[0],u[k][1]+ dt*functionvalue[1],t[k+1])
        
        subb.push(JSON.parse(JSON.stringify(u[k])))
        store.push(subb)
    }
    let v_array=[]
    let w_array=[]
    for(k=0; k<n; k++){
    v_array.push(store[k][0][0])
    w_array.push(store[k][0][1])
    }
    let fin_array=[v_array,w_array,t]
    
    return fin_array
    
}

function f(v,w,t){
    return [3+Math.pow((3+4*t-w),3),4+Math.pow((2+3*t-v),4)]
}

let fin_array = ForwardEuler(f, U0, dt ,n)





function setup() {
    createCanvas(400, 400);
  background(255);
  }
  
function draw() {
    
    noStroke()
    
    
    
    for(let i=0; i<n-1; i++){
        fill(255,0,0)
      circle(map((fin_array[2][i]), 0, n*dt, 0, width), width-map((fin_array[0][i]), 0, fin_array[1][n-1], 0, width), 2)
        fill(0,0,255)
    
        circle(map((fin_array[2][i]), 0, n*dt, 0, width), width-map((fin_array[1][i]), 0, fin_array[1][n-1], 0, width), 2)
      }

    fill(255)
    stroke(0);
  beginShape();
  for (let x = 0; x < n*dt; x++) {
    xValue = map(x, 0, n*dt, 0, width);
    y = 2+3*x
    yValue = map(y, 0, 3+4*n*dt, 0, width);
    vertex(xValue, width- yValue);
  }
  endShape();

  beginShape();
  for (let x = 0; x < n*dt; x++) {
    xValue = map(x, 0, n*dt, 0, width);
    y = 3+4*x
    yValue = map(y, 0, 3+4*n*dt, 0, width);
    vertex(xValue, width- yValue);
  }
  endShape();



      
  
    
    }
