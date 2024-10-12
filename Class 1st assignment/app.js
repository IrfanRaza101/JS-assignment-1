// Birth year input
var birthYear = parseInt(prompt("Please enter your birth year (e.g., 1990):"), 10);

// Birth month input
var birthMonthInput = prompt("Please enter your birth month (e.g., 2, Feb, February):").toLowerCase();

// Birth date input
var birthDate = parseInt(prompt("Please enter your birth date (1-31):"), 10);

// Month names and abbreviations arrays
var monthNames = ["january", "february", "march", "april", "may", "june", 
                  "july", "august", "september", "october", "november", "december"];

var monthAbbreviations = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// Determine birth month
var birthMonth;

if (!isNaN(birthMonthInput)) {
    // If month is entered as a number
    birthMonth = parseInt(birthMonthInput, 10) - 1; // Minus 1 to match index
} else {
    // If month is entered as a word (full or abbreviated)
    birthMonth = monthAbbreviations.indexOf(birthMonthInput.slice(0, 3)); // Check for abbreviations
    if (birthMonth === -1) {
        birthMonth = monthNames.indexOf(birthMonthInput); // Check for full month names
    }
}

// Check if the month is valid
if (birthMonth === -1 || birthDate < 1 || birthDate > 31 || isNaN(birthYear)) {
    console.error("Invalid input. Please enter a valid date, month, or year.");
} else {
    // Current date
    var today = new Date();
    
    // User's birth date
    var userBirthDate = new Date(birthYear, birthMonth, birthDate);
    
    // Calculate age in years, months, and days
    var ageYears = today.getFullYear() - userBirthDate.getFullYear();
    var ageMonths = today.getMonth() - userBirthDate.getMonth();
    var ageDays = today.getDate() - userBirthDate.getDate();
    
    // Adjust if birthday hasn't occurred yet this year
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    
    if (ageDays < 0) {
        // Adjust days by borrowing from previous month
        var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Last day of the previous month
        ageDays += previousMonth.getDate();
        ageMonths--;
    }

    console.log(`Today you are ${ageYears} Year, ${ageMonths} Months, and ${ageDays} days old.`);
}
