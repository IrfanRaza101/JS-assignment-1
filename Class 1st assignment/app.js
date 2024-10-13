var birthYear = parseInt(prompt("Please enter your birth year (e.g., 1990):"), 10);


var birthMonthInput = prompt("Please enter your birth month (e.g., 2, Feb, February):").toLowerCase();


var birthDate = parseInt(prompt("Please enter your birth date (1-31):"), 10);


var monthNames = ["january", "february", "march", "april", "may", "june", 
                  "july", "august", "september", "october", "november", "december"];

var monthAbbreviations = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];


var birthMonth;

if (!isNaN(birthMonthInput)) {
    
    birthMonth = parseInt(birthMonthInput, 10) - 1; 
} else {
    
    birthMonth = monthAbbreviations.indexOf(birthMonthInput.slice(0, 3)); 
    if (birthMonth === -1) {
        birthMonth = monthNames.indexOf(birthMonthInput); 
    }
}


if (birthMonth === -1 || birthDate < 1 || birthDate > 31 || isNaN(birthYear)) {
    console.error("Invalid input. Please enter a valid date, month, or year.");
} else {
    
    var today = new Date();
    
    
    var userBirthDate = new Date(birthYear, birthMonth, birthDate);
    
   
    var ageYears = today.getFullYear() - userBirthDate.getFullYear();
    var ageMonths = today.getMonth() - userBirthDate.getMonth();
    var ageDays = today.getDate() - userBirthDate.getDate();
    

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    
    if (ageDays < 0) {
        
        var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0); 
        ageDays += previousMonth.getDate();
        ageMonths--;
    }

    alert(`Today you are ${ageYears} Year, ${ageMonths} Months, and ${ageDays} days old.`);
}
