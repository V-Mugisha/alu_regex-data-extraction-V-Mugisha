function extractEmails(text) {
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

function extractUrls(text) {
	// Pattern for url texts: http/https protocol, domain, optional path
    
	const pattern = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[a-zA-Z0-9.\/_-]*)?/g;
	return text.match(pattern) || [];
}

function extractCurrency(text) {
    	// Pattern for currency extraction: $ symbol, digits with optional commas, and decimal points
    	
	const pattern = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
    	return text.match(pattern) || [];
}

function extractHashtags(text) {
    	// Pattern matches: # followed by word characters (letters, numbers, underscore)
    	
	const pattern = /#[a-zA-Z0-9_]+/g;
    	return text.match(pattern) || [];
}

// Test function to demonstrate all regex functions 
function testAllExtractions() {
    	// Test all regex patterns with sample data
   
    	const sampleText = `
    	Contact us at user@example.com or admin@company.co.uk for more info.
    	Visit our website at https://www.example.com or https://subdomain.example.org/page
    	Call us at (123) 456-7890, 123-456-7890, or 123.456.7890
    	Use credit card 1234 5678 9012 3456 or 1234-5678-9012-3456
    	Meeting times: 14:30, 2:30 PM, 10:15 AM
    	HTML code: <p>Hello</p> <div class="example">Test</div> <img src="image.jpg" alt="description">
    	Follow us: #example #ThisIsAHashtag #coding
    	Prices: $19.99, $1,234.56, $50.00
    	`;

    	console.log("=== EMAIL ADDRESSES ===");
    	const emails = extractEmails(sampleText);
    	emails.forEach(email => {
        	console.log(`Found email: ${email}`);
    	});

    	console.log("\n=== PHONE NUMBERS ===");
    	const phones = extractPhoneNumbers(sampleText);
    	phones.forEach(phone => {
        	console.log(`Found phone numbers: ${phone}`);
    	});

	console.log("\n=== URLs ===");
    	const urls = extractUrls(sampleText);
   	urls.forEach(url => {
        	console.log(`Found URL: ${url}`);
    	});

	console.log("\n=== CURRENCY ===");
    	const currencies = extractCurrency(sampleText);
    	currencies.forEach(currency => {
        	console.log(`Found currency: ${currency}`);
    	});

	console.log("\n=== HASHTAGS ===");
    	const hashtags = extractHashtags(sampleText);
    	hashtags.forEach(hashtag => {
        	console.log(`Found hashtag: ${hashtag}`);
    	});
}

testAllExtractions()
