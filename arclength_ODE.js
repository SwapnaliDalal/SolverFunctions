const n = 50 //no of iterations- can be varied

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

function f1(u,t){
    return Math.pow(5/4, 0.5)
}

function f2(u,t){
    return 2*t
}

let fin_array_1 = ForwardEuler(f1, 0 ,2 ,n)
let fin_array_2 = ForwardEuler(f2, 0 ,2 ,n)

console.log("Length of arc for straight line is" , fin_array_1[0][n])

console.log("Length of arc for parabola is" , fin_array_2[0][n])




