import { useFetch } from "../hook/useFetch";
import NewsCard from "../components/newsCard/NewsCard";
import Spinner from "../components/spiner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import React, { useState, useEffect } from "react";

function News({ apiKey, pageSize, category, country, setProgress }) {
  const { articles, loading, totalResults, error, setPage, page, reFetch } =
    useFetch(country, category, pageSize, apiKey,setProgress);

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center bg-slate-900 w-[100%] h-[100%]">
          <h1 className="text-white text-[24px] capitalize py-5">
            {category} - News4u
          </h1>
          {loading && <Spinner />}
        </div>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={reFetch}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="flex flex-wrap gap-4 justify-center bg-slate-900 w-[100%] h-[100%]">
          {articles.map((ar) => {
            return (
              <div className="m-4 flex" key={ar.url}>
                <NewsCard ar={ar} />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;
