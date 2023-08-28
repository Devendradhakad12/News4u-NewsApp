import React from "react";
 
function News() {
 

  return (
    <div className="flex flex-wrap justify-center gap-10 p-9 bg-slate-900 w-[100%] h-[100%]">
      <div className=" bg-slate-300 h-[500px] w-[400px] rounded-xl">
        <div>
          <img
            src="https://www.pinkvilla.com/images/2023-08/289736076_samantha-in-anita-dongre-outfit-1.jpg"
            alt=""
            className=" rounded-t-xl"
          />
        </div>

        <div className="px-5 py-2">
          <h2 className="text-[20px] font-[600]">
            Bigg Boss 7 Telugu – Popular adult star............ {""}
            <a href="" className=" bg-amber-800 text-[15px] px-3 py-1 rounded-md text-white font-[400]">
              Visit website
            </a>
          </h2>
        </div>

        <div className="px-5">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            labore atque nam quis, ab quae vel laborum distinctio natus quam!
          </p>
        </div>

        <div className="px-5 pt-5">
          <p>
            <span className=" font-[600]"> Date :</span> Sun 27 2023
          </p>
        </div>

        <div className="px-5 py-5">
          <a
            href=""
            className=" float-right bg-blue-800 text-[15px] px-3 py-1 rounded-sm text-white font-[400]"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
