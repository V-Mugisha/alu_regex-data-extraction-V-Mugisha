// Pattern for emails. Matches patterns like: user@example.com, firstname.lastname@company.co.uk
const emailsRegexPattern = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g;

// Pattern explanation: optional parentheses for area code, digits with separators
const phoneNumbersRegexPattern = /(?:\(\d{3}\)\s?|\d{3}[-.]?)\d{3}[-.]?\d{4}/g;
