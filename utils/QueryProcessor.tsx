export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "lchanga";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "ashleyl4";
  }

  // Parse "Which of the following numbers is the largest" queries
  const largestMatch = query.toLowerCase().match(/which of the following numbers is the largest[:\s]+([0-9,\s]+)\??/);
  if (largestMatch) {
    // Extract numbers from the matched string
    const numbersStr = largestMatch[1];
    const numbers = numbersStr.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    
    if (numbers.length > 0) {
      const largest = Math.max(...numbers);
      return largest.toString();
    }
  }

  // Parse "What is X plus Y?" queries
  const plusMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)\??/);
  if (plusMatch) {
    const num1 = parseInt(plusMatch[1]);
    const num2 = parseInt(plusMatch[2]);
    const sum = num1 + num2;
    return sum.toString();
  }

  return "";
}
