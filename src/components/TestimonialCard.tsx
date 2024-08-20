"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialCard = () => {
    const testimonials = [
        {
          name: "Sarah Johnson",
          title: "Singer-Songwriter",
          quote: "This music platform has completely transformed the way I create and share my songs. The user-friendly interface and sound quality are exceptional!"
        },
        {
          name: "Michael Green",
          title: "Music Producer",
          quote: "I've tried many music platforms, but none compare to this one. The ease of collaboration with artists and the extensive sound library are unbeatable."
        },
        {
          name: "Emily White",
          title: "Pianist",
          quote: "I love the seamless integration of this platform with my recording equipment. It makes practicing and recording sessions so much more efficient."
        },
        {
          name: "David Brown",
          title: "DJ & Remixer",
          quote: "This is my go-to platform for mixing tracks. The intuitive layout and powerful tools have made my workflow so much smoother."
        },
        {
          name: "Jessica Lee",
          title: "Violinist",
          quote: "This platform offers a vast range of features that cater to musicians of all levels. It has truly enhanced my performance and recording experience."
        }
      ];
      
      
    return (

        
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  flex   justify-centermx-5 rounded-md   flex-col antialiased    dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
              <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
      </div>
    );
};

export default TestimonialCard;