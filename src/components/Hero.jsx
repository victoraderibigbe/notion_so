import React from "react";
import ArrowRight from "./svg/ArrowRight";
import heroXmasImage from "../assets/images/hero_xmas-rev.png";
import HeroCard from "./HeroCard";
import Star from "./svg/Star";
import Docs from "./svg/Docs";
import Book from "./svg/Book";
import Track from "./svg/Track";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <>
      <div className="mt-32 text-center">
        <div className="mx-auto md:w-2/5">
          <CallToAction
            title={"Write, plan, share. With AI at your side."}
            text={
              "Notion is the connected workspace where better, faster work happens."
            }
            btnTitle={"Get Notion Free"}
            btnArrow={true}
            image={heroXmasImage}
            altText={"Hero xmas image"}
            imgStyle={"mx-auto md:w-2/3"}
            linkText={"Request a demo"}
            URL={"#"}
          />
        </div>
        <div className="flex flex-col justify-between w-2/3 mx-auto mt-4 md:flex-row">
          <HeroCard
            title={"AI"}
            icon={<Star />}
            text={"Ask literally anything. Notion will answer."}
            textColor={"text-purple-500"}
          />
          <HeroCard
            title={"Wikis"}
            icon={<Track />}
            text={"Centralize your knowlege. No more hunting for anwers."}
            textColor={"text-red-500"}
          />
          <HeroCard
            title={"Projects"}
            icon={<Book />}
            text={"Manage complex projects without the chaos."}
            textColor={"text-blue-500"}
          />
          <HeroCard
            title={"Docs"}
            icon={<Docs />}
            text={"Simple, poweerful, beautiful. Next-gen notes & docs."}
            textColor={"text-amber-500"}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
