import PageLink from "./PageLink";
import topPeekJImg from "../assets/images/topPeekJ.png";
import SectionCard from "./SectionCard";
import {
  FaBed,
  FaCalendar,
  FaCircleCheck,
  FaClipboardList,
  FaFlag,
  FaHouse,
  FaPlane,
} from "react-icons/fa6";
import companyWikiImg from "../assets/images/company-wiki-template.png";
import CallToAction from "./CallToAction";
import notionParade from "../assets/images/notion-parade.png"

const HomeThirdSection = () => {
  return (
    <>
      <div className="mx-auto mt-32 md:w-3/4">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-4 text-center md:col-span-2 md:col-start-2">
            <h2>Endless ways to use it</h2>
            <div className="flex justify-center">
              <PageLink text={"Browse all templates"} URL={"#"} />
            </div>
          </div>
          <div className="relative">
            <img
              src={topPeekJImg}
              className="absolute md:w-3/4"
              alt="Top Peek Image"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-5 mt-16">
          <div className="col-span-4 row-span-1 md:col-span-2 md:row-span-3">
            <SectionCard
              icon={<FaHouse className="mb-3 text-3xl text-red-500" />}
              title={"Company wiki"}
              linkText={"Get template"}
              URL={"#"}
              image={companyWikiImg}
              imgStyle={"md:absolute top-5 left-40 w-4/5"}
              customStyle={"mb-10 mt-5"}
              hover={true}
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <SectionCard
              icon={<FaFlag className="mb-3 text-3xl text-blue-500" />}
              title={"Product roadmap"}
              linkText={"Get template"}
              URL={"#"}
              customStyle={"mb-10 mt-5"}
              hover={true}
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <SectionCard
              icon={<FaCircleCheck className="mb-3 text-3xl text-orange-500" />}
              title={"OKRs"}
              linkText={"Get template"}
              URL={"#"}
              customStyle={"mb-10 mt-5"}
              hover={true}
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <SectionCard
              icon={
                <FaClipboardList className="mb-3 text-3xl text-yellow-500" />
              }
              title={"Meeting notes"}
              linkText={"Get template"}
              URL={"#"}
              customStyle={"mb-10 mt-5"}
              hover={true}
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <SectionCard
              icon={<FaPlane className="mb-3 text-3xl text-red-500" />}
              title={"Vacation planner"}
              linkText={"Get template"}
              URL={"#"}
              customStyle={"mb-10 mt-5"}
              hover={true}
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <SectionCard
              icon={<FaCalendar className="mb-3 text-3xl text-green-500" />}
              title={"Editoral calendar"}
              linkText={"Get template"}
              URL={"#"}
              customStyle={"mb-10 mt-5"}
              hover={true}
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <SectionCard
              icon={<FaBed className="mb-3 text-3xl text-purple-500" />}
              title={"Habit tracker"}
              linkText={"Get template"}
              URL={"#"}
              customStyle={"mb-10 mt-5"}
              hover={true}
            />
          </div>
        </div>
        <div className="my-20">
          <CallToAction
            title={"Get started for free"}
            text={
              "Play around with it first. Pay and add your team later."
            }
            btnTitle={"Get Notion Free"}
            btnArrow={true}
            image={notionParade}
            altText={"Notion parade image"}
            imgStyle={"mx-auto md:w-2/3"}
            linkText={"Request a demo"}
            URL={"#"}
          />
        </div>
      </div>
    </>
  );
};

export default HomeThirdSection;
