import React from "react";
import figmaLogo from "../assets/images/figma-logo.png";
import pixalLogo from "../assets/images/pixar.png";
import doordashLogo from "../assets/images/doordash.png";
import amazonLogo from "../assets/images/amazon.png";
import pinterestLogo from "../assets/images/pinterest.png";
import electricLogo from "../assets/images/General_Electric_logo.svg__1_.png";
import uberLogo from "../assets/images/uber.png";
import plaidLogo from "../assets/images/plaid.png";
import toyotaLogo from "../assets/images/toyota.png";
import snowflakeLogo from "../assets/images/snowflake.png";
import headspaceLogo from "../assets/images/headspace.png";
import anglelistLogo from "../assets/images/angel-list.png";
import robinLogo from "../assets/images/robinhood_logo.png";
import pencilIllustration from "../assets/images/giant-pencil-illustration.png";
import toolsImg from "../assets/images/tools-before-notion-V2.png";
import strikethroughImg from "../assets/images/tools-strikethrough-V2.png";
import pencilpeekImg from "../assets/images/pencil-peek-illustration-V2.png";
import metalabLogo from "../assets/images/metalab.png";
import topPeekImg from "../assets/images/topPeekI.png";
import { FaShuffle, FaEye, FaCookie } from "react-icons/fa6";
import ImageCarousel from "./ImageCarousel";
import timelineImg from "../assets/images/timeline.png";
import tableImg from "../assets/images/table.png";
import projectsImg from "../assets/images/projects.png";
import listImg from "../assets/images/list.png";
import kanbanImg from "../assets/images/kanban.png";
import galleryImg from "../assets/images/gallery.png";
import SectionCard from "./SectionCard";
import customizeInfoImg from "../assets/images/customize-info.png";
import projectDataImg from "../assets/images/build-any-page-communicate-any-idea.png";
import DirectorQuote from "./DirectorQuote";
import matchGroupLogo from "../assets/images/match-group.png";
import PageLink from "./PageLink";

const HomeFirstSection = () => {
  const images = [
    timelineImg,
    tableImg,
    projectsImg,
    listImg,
    kanbanImg,
    galleryImg,
  ];

  return (
    <>
      <div className="px-4 mb-10 text-center">
        <h2>Millions run on Notion every day</h2>
        <p>
          Powering the world’s best teams, from next-generation startups to
          established enterprises.
        </p>
        <div className="flex justify-center">
          <PageLink text={"Read customers stories"} URL={"#"} />
        </div>
      </div>

      <div className="company-logos">
        <img className="company-logo" src={figmaLogo} alt="Figma logo" />
        <img className="company-logo" src={pixalLogo} alt="Pixal logo" />
        <img className="company-logo" src={doordashLogo} alt="Doordash logo" />
        <img className="company-logo" src={amazonLogo} alt="Amazon logo" />
        <img
          className="company-logo"
          src={pinterestLogo}
          alt="Pinterest logo"
        />
        <img className="company-logo" src={electricLogo} alt="Electric logo" />
        <img className="company-logo" src={uberLogo} alt="Uber logo" />
        <img className="company-logo" src={plaidLogo} alt="Plaid logo" />
        <img className="company-logo" src={toyotaLogo} alt="Toyota logo" />
        <img
          className="company-logo"
          src={snowflakeLogo}
          alt="Snowflake logo"
        />
        <img
          className="company-logo"
          src={headspaceLogo}
          alt="Headspace logo"
        />
        <img className="company-logo" src={anglelistLogo} alt="Angelist logo" />
        <img className="company-logo" src={robinLogo} alt="Robin logo" />
      </div>

      <div className="grid w-full grid-rows-2 gap-16 px-2 mx-auto md:grid-cols-5 md:px-0 md:w-2/4 md:gap-0">
        <div className="md:col-span-3">
          <div className="pt-16 text-center">
            <h2 className="mb-0 text-4xl md:text-5xl md:mb-6">
              Consolidate tools.
            </h2>
            <h2 className="mb-0 text-4xl md:text-5xl md:mb-6">Cut Costs.</h2>
          </div>
        </div>
        <div className="relative hidden col-span-2 md:flex">
          <img
            className="absolute -top-16"
            src={pencilIllustration}
            alt="Giant pencil illustration"
          />
        </div>
        <div className="relative flex md:col-span-4">
          <div className="relative">
            <img className="w-full" src={toolsImg} alt="Tools image" />
            <img
              className="absolute w-full top-5"
              src={strikethroughImg}
              alt="Strikethrough image"
            />
          </div>
          <div className="md:hidden">
            <img src={pencilpeekImg} alt="Pencil peek illustration" />
          </div>
        </div>
      </div>
      <DirectorQuote
        quote={
          "We got rid of nearly a dozen different tools because of what Notion does for us."
        }
        author={"Justin Watt"}
        role={"Director of Ops & Marketing, MetaLab"}
        logo={metalabLogo}
        altText={"Metalab logo"}
      />

      <div className="grid w-full gap-4 mx-auto mt-16 mb-10 md:grid-cols-2 md:w-3/4">
        <div className="col-span-2">
          <div className="md:flex">
            <div className="hidden md:flex">
              <img
                className="mr-4 w-72"
                src={topPeekImg}
                alt="Top Peek Image"
              />
            </div>
            <div>
              <h2 className="mt-20 text-center">Powerful building blocks</h2>
            </div>
            <div className="flex justify-center mx-auto md:hidden">
              <img
                className="mr-4 w-72"
                src={topPeekImg}
                alt="Top Peek Image"
              />
            </div>
          </div>
          <div className="border border-slate-50 bg-slate-50">
            <SectionCard
              icon={<FaShuffle size={20} className="mb-3 text-blue-600" />}
              title={"Visualize, filter & sort anyway you want"}
              text={
                "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that’s most helpful to you."
              }
            />
            <ImageCarousel images={images} />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <SectionCard
            icon={<FaEye size={20} className="mb-3 text-blue-600" />}
            title={"Customize the info you track"}
            text={
              "Create your own labels, tags, owners, and more, so everyone has context and everything stays organized."
            }
            image={customizeInfoImg}
            altText={"Customize Info Image"}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <SectionCard
            icon={<FaCookie size={20} className="mb-3 text-blue-600" />}
            title={"Build any page, communicate any idea"}
            text={
              "Everything is drag and drop in Notion — images, toggles, to-do’s, even embedded databases."
            }
            image={projectDataImg}
            altText={"Project Data Image"}
          />
        </div>
        <div className="col-span-2">
          <DirectorQuote
            quote={
              "Notion adapts to your needs. It’s as minimal or as powerful as you need it to be."
            }
            author={"Rahim Makani"}
            role={"Director of Product, Matchgroup"}
            logo={matchGroupLogo}
            altText={"Matchgroup Logo"}
          />
        </div>
      </div>
    </>
  );
};

export default HomeFirstSection;
