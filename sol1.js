function findSquareRoot(num){
    let l=1
    let r=num
    while(l<=r){
        let m=Math.floor((r+l)/2)
        let sq=m*m;
        if(sq===num){
            return m;
        }
        else if(sq<num){
            l=m+1;
        }
        else{
            r=m+1
        }

    }
    return r;
}
console.log(findSquareRoot(8))