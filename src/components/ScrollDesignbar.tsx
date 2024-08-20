"use client";
import React from "react";
 
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Guitar Fundamentals",
    description:
     "Learn the basics of playing guitar with our comprehensive beginner's course.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       
      </div>
    ),
  },
  {
    title: "Piano for Beginners",
    description:
    "Start your musical journey with foundational piano skills taught by expert instructors.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        
      </div>
    ),
  },
  {
    title: "Advanced Vocal Techniques",
    description:
     "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        
      </div>
    ),
  },
  {
    title: "Drumming Mastery",
    description:
    "Master the drums with our comprehensive course covering all skill levels.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      
      </div>
    ),
  },
];
export function ScrollDesign() {
  return (
    <div className="px-4 py-5">
      <StickyScroll content={content}  />
    </div>
  );
}
