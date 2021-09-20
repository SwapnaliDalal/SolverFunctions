
class ForwardEuler {
    constructor(f, U0, T, n){
        this.f = f
        this.U0 = U0
        this.T = T
        this.n = n
        this.t = new Array(n+1).fill(0);
        this.u = new Array(n+1).fill(0);
        u[0] = U0
        t[0] = 0
    }
    
}