# ALU Regex Data Extraction Project

## Project Overview

This project is a **Web Application Data Extraction Tool** that uses the power of Regular Expressions to extract specific data types from hundreds of thousands of pages of string responses from an API. As a Junior Full Stack Developer, this tool helps aggregate and process data from various web sources.

## Supported Data Types

This application can extract **5 different types of data** using carefully crafted regular expressions:

1. **Email Addresses** - Extract valid email formats
2. **URLs** - Extract HTTP/HTTPS web addresses  
3. **Phone Numbers** - Extract various phone number formats
4. **Hashtags** - Extract social media hashtags
5. **Currency Amounts** - Extract dollar amounts with proper formatting

## Technical Requirements

- **Programming Language**: JavaScript (ES6+)
- **Runtime Environment**: Node.js or Web Browser
- **Dependencies**: None (Pure JavaScript implementation)
- **File Structure**: Single file implementation for simplicity

## Installation and Setup

### Prerequisites
- Node.js installed on your system (for command line usage)
- Or any modern web browser (for browser usage)

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/V-Mugisha/alu_regex-data-extraction-V-Mugisha.git
   cd alu_regex-data-extraction-V-Mugisha
   ```

2. **No additional installation required** - This is a pure JavaScript implementation with no external dependencies.

## How to Run the Application

### Method 1: Node.js Command Line
```bash
node regexes.js
```

### Method 2: Web Browser
1. Create an HTML file and include the JavaScript file:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Regex Data Extraction</title>
   </head>
   <body>
       <script src="regexes.js"></script>
       <script>
           // Call the test function or use individual extraction functions
           testAllExtractions();
       </script>
   </body>
   </html>
   ```

2. Open the HTML file in your web browser and check the console for results.

## Usage Examples

### Individual Function Usage

```javascript
// Extract emails from text
const emails = extractEmails("Contact us at user@example.com or admin@company.co.uk");
console.log(emails); // Output: ['user@example.com', 'admin@company.co.uk']

// Extract URLs from text
const urls = extractUrls("Visit https://www.example.com or https://subdomain.example.org/page");
console.log(urls); // Output: ['https://www.example.com', 'https://subdomain.example.org/page']

// Extract phone numbers
const phones = extractPhoneNumbers("Call (123) 456-7890 or 123-456-7890");
console.log(phones); // Output: ['(123) 456-7890', '123-456-7890']

// Extract hashtags
const hashtags = extractHashtags("Follow us #example #ThisIsAHashtag");
console.log(hashtags); // Output: ['#example', '#ThisIsAHashtag']

// Extract currency amounts
const currency = extractCurrency("Prices: $19.99 and $1,234.56");
console.log(currency); // Output: ['$19.99', '$1,234.56']
```

### Running All Extractions at Once

```javascript
// Test all extraction functions with sample data
testAllExtractions();
```

## Regex Patterns Explained

### 1. Email Addresses
**Pattern**: `/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g`
- Matches: `user@example.com`, `firstname.lastname@company.co.uk`
- Handles common email characters and domain extensions

### 2. URLs
**Pattern**: `/https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[a-zA-Z0-9.\/_-]*)?/g`
- Matches: `https://www.example.com`, `https://subdomain.example.org/page`
- Supports HTTP and HTTPS protocols with optional paths

### 3. Phone Numbers
**Pattern**: `/(?:\(\d{3}\)\s?|\d{3}[-.]?)\d{3}[-.]?\d{4}/g`
- Matches: `(123) 456-7890`, `123-456-7890`, `123.456.7890`
- Handles multiple common phone number formats

### 4. Hashtags
**Pattern**: `/#[a-zA-Z0-9_]+/g`
- Matches: `#example`, `#ThisIsAHashtag`
- Supports letters, numbers, and underscores

### 5. Currency Amounts
**Pattern**: `/\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g`
- Matches: `$19.99`, `$1,234.56`
- Handles comma separators and decimal cents

## Edge Case Handling

The application handles various edge cases:

- **Malformed Input**: Functions return empty arrays when no matches are found
- **Multiple Formats**: Each regex pattern supports multiple valid formats for its data type
- **Invalid Data**: Gracefully handles text that doesn't contain the target data types
- **Mixed Content**: Can extract multiple data types from the same input text

## Sample Input and Output

When you run `testAllExtractions()`, you'll see output like this:

```
=== EMAIL ADDRESSES ===
Found email: user@example.com
Found email: admin@company.co.uk

=== URLs ===
Found URL: https://www.example.com
Found URL: https://subdomain.example.org/page

=== PHONE NUMBERS ===
Found phone: (123) 456-7890
Found phone: 123-456-7890
Found phone: 123.456.7890

=== HASHTAGS ===
Found hashtag: #example
Found hashtag: #ThisIsAHashtag
Found hashtag: #coding

=== CURRENCY ===
Found currency: $19.99
Found currency: $1,234.56
Found currency: $50.00
```

## Project Structure

```
alu_regex-data-extraction-V-Mugisha/
├── regexes.js            # Main application file
├── README.md             # Project documentation

```
