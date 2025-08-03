// Api.jsx
import React, { useEffect, useState } from "react";

function Api() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
      const data = await response.json();
      console.log(data);
      setQuote(data); // take the first quote from the array
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
return (
  <div className="p-4 border shadow-md">
    {quote ? (
      <>
        <p className="text-lg font-semibold mb-2">"{quote.quote}"</p>
        <p className="text-sm text-gray-600">— {quote.author}</p>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
}

export default Api;
