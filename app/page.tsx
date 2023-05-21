"use client"
import Categories from "@/components/Categories";
import Collections from "@/components/Collections";
import { HighlightedArticles, HighlightedArticlesProps } from "@/components/HighlightedArticles";
import JoinCard from "@/components/JoinCard";
import Rating from "@/components/Rating";
import SwiperPanel from "@/components/SwiperPanel";
import TopRatedRecipes from "@/components/TopRatedRecipes";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNextPrev } from "@/components/hooks";


type Props = {};


export default function Home({ }: Props) {
  return (
    <div>
      <div className="w-full h-screen relative overflow-hidden ">
        <img className="w-full absolute -z-10 " src="/img/swiperBackground.png" alt="" />
        <SwiperPanel className="mt-32 "></SwiperPanel>
      </div>
      <div className=" h-fit pb-10 rounded-lg border border-gray-300 p-45 my-5 w-4/5 mx-auto flex flex-col  items-center">
        <JoinCard className="mt-5" />
        <Categories className="mt-5" />
        <Collections className="mt-5" />
        <TopRatedRecipes className="mt-5" />
        <div className="mt-5">

          <img src="/img/ads1.png" alt="" />
        </div>
      </div>
      <div className="w-full">
          <HighlightedArticles  />
          
         </div>
    </div>
  )
}


