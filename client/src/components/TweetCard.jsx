import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

import { user_img } from "../assets/images";
import {
  twitter_analytics,
  twitter_like,
  twitter_reply,
  twitter_retweet,
} from "../assets/svgs/index";

function TweetCard() {
  return (
    <>
      <div className=" border-[0.1px] border-t-0 border-gray-800 overflow-x-auto flex justify-around  px-3 py-3">
        <div className="w-20  sm:w-10">
          <img
            src={user_img}
            alt=""
            className="w-10  object-cover  rounded-full"
          />
        </div>
        <div>
          <div className="flex justify-between ml-5 items-center">
            <h1 className="font-semibold xs:hidden">Nitish Chaudhary</h1>
            <div className="  text-gray-500 items-center hidden xs:flex ">
              <div className="flex gap-2">
                <h1 className="font-semibold text-white ">Nitish Chaudhary</h1>
                <h2 className="text-start">@NitishCH12</h2>
              </div>
              <div>
                <h2>
                  <LuDot />
                </h2>
              </div>
              <h2>6h</h2>
            </div>
            <BsThreeDots />
          </div>
          <div className="flex ml-5 text-gray-500 items-center xs:hidden">
            <h2 className="">@NitishCH12</h2>
            <h2>
              <LuDot />
            </h2>
            <h2>6h</h2>
          </div>
          <div className="ml-5">
            <p className="text-[#cfd0d1]">
              Serious question: what can you learn from udemy that you can't
              learn from youtube?{" "}
            </p>
          </div>
          <div className="flex items-center gap-3 xs:gap-10 xs:justify-between ml-5 mt-3 text-sm text-gray-400">
            <section className="flex gap-1.5  cursor-pointer">
              <img src={twitter_reply} alt="" />
              <p>167</p>
            </section>
            <section className="flex gap-1.5 cursor-pointer">
              <img src={twitter_retweet} alt="" />
              <p>14</p>
            </section>
            <section className="flex gap-1.5 cursor-pointer">
              <img src={twitter_like} alt="" />
              <p>253</p>
            </section>
            <section className="flex gap-1.5 cursor-wait">
              <img src={twitter_analytics} alt="" />
              <p>0</p>
            </section>
            <p>{<FaRegBookmark color="gray" />}</p>
          </div>
        </div>
        {/* <div>***</div> */}
      </div>
    </>
  );
}

export default TweetCard;