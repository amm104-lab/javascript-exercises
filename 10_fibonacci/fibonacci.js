const fibonacci = function(num) {

    let j = 1;
    let k = 0;
    let numb = 0;

    if(typeof(num)=== "string"){
        let numb = Number(num);

        if(numb === 0){
            return 0;
        }
    
        else if(numb < 0){
            return "OOPS";
        }
    
        for(let i=2;i<=numb;i++){
            let l = j+k;
            k = j;
            j = l;
        }
        return j;
    }

    else{
        let numb = num;
    

    if(numb === 0){
        return 0;
    }

    else if(numb < 0){
        return "OOPS";
    }

    for(let i=2;i<=numb;i++){
        let l = j+k;
        k = j;
        j = l;
    }
    return j;}
};

// Do not edit below this line
module.exports = fibonacci;
