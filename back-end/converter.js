// userNumber is user input number which will be converted into roman numeral
export default convertToRoman = (userNumber) => {

    let result = '';


// Object with roman numerals 
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

    // A loop checking each value of arabicToRoman object which starts from the biggest numeral ("C") to the smallest ("I")_    
    for (const arabic in arabicToRoman) { 

        // We find the first numeral lower or equal to userNumber. Ex: if userNumber is 58 result will be "L" : 50
        while (userNumber >= arabicToRoman[arabic]) { 
            result += arabic; 
        // Then we subtract the rest: 58 - 50 = 8 and so on
        // The final result we got is "LVIII".  
            userNumber -= arabicToRoman[arabic]; 
        } 
    } 

    return result;
}