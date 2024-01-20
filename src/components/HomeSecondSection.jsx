import React from "react";
import ImageCarousel from "./ImageCarousel";
import marketingImg from "../assets/images/marketing.png";
import engineeringIng from "../assets/images/engineering.png";
import designImg from "../assets/images/design.png";
import productImg from "../assets/images/product.png";
import operationsImg from "../assets/images/operations.png";
import hrImg from "../assets/images/hr.png";
import { FaArrowRight } from "react-icons/fa6";
import avatars from "../assets/images/avatars.png";
import QuantityCard from "./QuantityCard";
import SectionCard from "./SectionCard";
import communityIcons from "../assets/images/community-icons-V2.png";
import welcomeNotionImg from "../assets/images/welcome-to-notion.png";
import deborahAvatar from "../assets/images/twitter-avatar-deborah.png";
import andreAvatar from "../assets/images/twitter-avatar-andre.png";
import oliverAvatar from "../assets/images/twitter-avatar-oliver.png";
import ProfileCard from "./ProfileCard";
import meetUpImg1 from "../assets/images/community-slide-01.png"
import meetUpImg2 from "../assets/images/community-slide-02.png"
import meetUpImg3 from "../assets/images/community-slide-03.png"
import meetUIpImg4 from "../assets/images/community-slide-04.png"
import PageLink from "./PageLink";

const HomeSecondSection = () => {
  const images = [
    marketingImg,
    engineeringIng,
    designImg,
    productImg,
    operationsImg,
    hrImg
  ];

  const meetUpImages = [
    meetUpImg1,
    meetUpImg2,
    meetUpImg3,
    meetUIpImg4
  ];

  return (
    <>
      <div className="w-full mx-auto text-center md:w-3/4">
        <div>
          <h2>Every team, side-by-side</h2>
        </div>
        <div>
          <ImageCarousel images={images} />
        </div>
      </div>

      <div className="w-full mx-auto mb-4 text-center md:w-3/4">
        <h2 className="mb-1">Join a global movement.</h2>
        <h2 className="mb-6">Unleash your creativity.</h2>
        <p className="text-2xl">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </p>
        <div className="flex justify-center">
          <PageLink text={"Learn More"} URL={"#"} />
        </div>
      </div>

      <div className="grid gap-5 mx-auto grid-col-2 md:w-3/4">
        <div className="grid w-full grid-cols-3 gap-5">
          <div className="col-span-3">
            <img src={avatars} alt="" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <QuantityCard quantity={"1M+"} text={"community members"} />
          </div>
          <div className="col-span-3 md:col-span-1">
            <QuantityCard quantity={"150+"} text={"community groups"} />
          </div>
          <div className="col-span-3 md:col-span-1">
            <QuantityCard quantity={"50+"} text={"countries represented"} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2 md:col-span-1">
            <SectionCard
              title={"An always-on support network"}
              text={
                "Swap setups and share tips in over 149 online communities."
              }
              image={communityIcons}
              altText={"Community Icons"}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <SectionCard
              title={"Choose your language"}
              text={
                "Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!"
              }
              image={welcomeNotionImg}
              altText={"Welcome Notion Image"}
              imgStyle={"md:absolute top-28 left-8"}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-5">
          <div className="col-span-3 row-span-1 md:row-span-3 md:col-span-2 bg-slate-50">
            <ImageCarousel images={meetUpImages} />
          </div>
          <div className="col-span-3 bg-slate-50 md:col-span-1">
            <ProfileCard
              avatar={deborahAvatar}
              altText={"Twitter Avatar Deborah"}
              name={"Deborah Mecca"}
              tag={"@DebMecca"}
              text={
                "I used to HATE documenting things. And then I started using @NotionHQ and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs."
              }
            />
          </div>
          <div className="col-span-3 bg-slate-50 md:col-span-1">
            <ProfileCard
              avatar={andreAvatar}
              altText={"Twitter Avatar Andre"}
              name={"André Blackman"}
              tag={"@mindofandre"}
              text={
                "One of the most incredible things about @NotionHQ is the dynamic community being built - creating and sharing at its best."
              }
            />
          </div>
          <div className="col-span-3 bg-slate-50 md:col-span-1">
            <ProfileCard
              avatar={oliverAvatar}
              altText={"Twitter Avatar Oliver"}
              name={"Oliver Peyre"}
              tag={"@opeyre"}
              text={
                "@NotionHQ Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSecondSection;
