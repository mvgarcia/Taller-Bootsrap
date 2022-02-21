/* let secret = (a,f,cl)=>{
    if(f==='encrypt'){
        return a.map(a=>{return a+cl});
    }
    else if(f==='decrypt'){
        return a.map(a=>{return a-cl});
    }
} */

let secret = (a,f,cl)=> f==='encrypt'? a.map(a=>{return a+cl}) : (f==='decrypt'? a.map(a=>{return a-cl}) : "error")

/* let mcd = (a,b)=>{
    if(a==b){
        return a;
    }
    else if(a>b){
        return mcd(b,a-b);
    }
    return mcd(a,b-a);
} */

let mcd = (a,b)=>(a==b)? a : (a>b ? mcd(b,a-b) : mcd(a,b-a))

/* let fibonacci = (n)=>{
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    return(fibonacci(n-2)+fibonacci(n-1))
} */

let fibonacci = (n)=> n==0? 0 : (n==1? 1 : fibonacci(n-2)+fibonacci(n-1))