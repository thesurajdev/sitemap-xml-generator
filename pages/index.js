import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generating sitemap for:", url);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">XML Sitemap Generator</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
          className="border p-2 w-full rounded"
          required
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Generate Sitemap
        </button>
      </form>
    </div>
  );
}
