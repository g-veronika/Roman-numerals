const convertToRoman = (userNumber) => {

    let result = '';

    const arabicToRoman = {
        "C": 100,
        "XC": 90, 
        "L": 50, 
        "XL": 40, 
        "X": 10, 
        "IX": 9, 
        "V": 5, 
        "IV": 4, 
        "I": 1
      }
    
    for (const arabic in arabicToRoman) { 
        while (userNumber >= arabicToRoman[arabic]) { 
            result += arabic; 
            userNumber -= arabicToRoman[arabic]; 
        } 
    } 

    return result;
}

module.exports = convertToRoman;