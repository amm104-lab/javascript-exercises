const palindromes = function (string) {

    let firstHalfe = string.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/\s+/g, '');  
    let secondHalfe =  string.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/\s+/g, '');

    let firstHalf = firstHalfe.slice((firstHalfe.length/2));
    let secondHalf = secondHalfe.slice(0,(secondHalfe.length/2)).split("").reverse().join("");

    if(firstHalf.length === secondHalf.length){

        if(firstHalf===secondHalf){
            return true;
        }

        else{
            return false;}
    }

    else{

    let firstHalfo = firstHalfe.slice((firstHalfe.length/2));
        let secondHalfo = secondHalfe.slice(0,(secondHalfe.length/2)+1).split("").reverse().join("");
        
        if(firstHalfo===secondHalfo){
            return true;
            }

        else{
            return false;}

        }
    };

// Do not edit below this line
module.exports = palindromes;