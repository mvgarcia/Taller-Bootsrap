let secret = (a,f,cl)=>{
    if(f==='encrypt'){
        return a.map(a=>{return a+cl});
    }
    else if(f==='decrypt'){
        return a.map(a=>{return a-cl});
    }
}

let mcd = (a,b)=>{
    if(a==b){
        return a;
    }
    else if(a>b){
        return mcd(b,a-b);
    }
    return mcd(a,b-a);
}

let fibonacci = (n)=>{
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    return(fibonacci(n-2)+fibonacci(n-1))
}