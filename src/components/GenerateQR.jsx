import React, { useState } from "react";

const GenerateQR = ({ text }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  if (!text) return null;

  // Encode the text for URL
  const encodedText = encodeURIComponent(text);
  const qrUrl = `https://quickchart.io/qr?text=${encodedText}&size=200`;

  return (
    <div className="flex flex-col justify-center items-center">
      {loading && !error && (
        <p className="text-white text-sm mb-2 mt-1">Generating QR...</p>
      )}
      {error && (
        <p className="text-red-500 text-sm mb-2">Failed to load QR code.</p>
      )}
      <img
        src={qrUrl}
        alt="QR Code"
        className={`lg:w-48 lg:h-48 w-32 h-32 ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
};

export default GenerateQR;
