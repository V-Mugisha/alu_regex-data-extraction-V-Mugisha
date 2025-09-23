function extractEmail(text) {
	// Pattern for emails. Matchs patters like: user@example.com or firstname.lastname@company.co.uk
	// Explanation: word characters + dots, @ symbol, domain with dots
	
	const pattern = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g;
   	return text.match(pattern) || [];
}

function extractPhoneNumbers(text) {
	// Pattern explanation: optional parentheses for area code, digits with separators
	
	const pattern = /(?:\(\d{3}\)\s?|\d{3}[-.]?)\d{3}[-.]?\d{4}/g;
	return text.match(pattern) || [];
}

