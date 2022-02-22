import Link from "next/link";
import React from "react";
import PaginationBtn from "./PaginationBtn";

function SearchResult({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md md-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results(
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <Link href={result.link}>
              <a className="text-sml line-clamp-1">{result.formattedUrl}</a>
            </Link>
            <Link href={result.link}>
              <a className="text-sml"><h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h2></a>
            </Link>
          </div>
          <p className="line-clamp-2">{result.snippet}...</p>
        </div>
      ))}
      <PaginationBtn/>
    </div>
  );
}

export default SearchResult;
