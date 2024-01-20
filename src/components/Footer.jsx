import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import NotionLogo from "./NotionLogo";
import Dropdown from "./MyDropdown";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="grid grid-cols-4 ps-5 md:ps-0">
          <div className="col-span-4 mb-10 md:col-span-1">
            <div className="flex justify-center my-3">
              <NotionLogo />
            </div>
            <div className="flex justify-center my-3">
              <a href="#">
                <FaInstagram className="mx-2 text-3xl transition text-stone-500 hover:text-slate-900" />
              </a>
              <a href="#">
                <FaTwitter className="mx-2 text-3xl transition text-stone-500 hover:text-blue-500" />
              </a>
              <a href="#">
                <FaLinkedin className="mx-2 text-3xl transition text-stone-500 hover:text-blue-600" />
              </a>
              <a href="#">
                <FaFacebook className="mx-2 text-3xl transition text-stone-500 hover:text-blue-600" />
              </a>
              <a href="#">
                <FaYoutube className="mx-2 text-3xl transition text-stone-500 hover:text-red-600" />
              </a>
            </div>
            <div className="flex justify-center my-3">
              <Dropdown />
            </div>
          </div>
          <div className="col-span-2 mb-10 md:col-span-1">
            <div className="mb-10">
              <p className="font-bold text-stone-800">Product</p>
              <FooterLink text={"AI"} URL={"#"} />
              <FooterLink text={"Docs"} URL={"#"} />
              <FooterLink text={"Wikis"} URL={"#"} />
              <FooterLink text={"Projects"} URL={"#"} />
              <FooterLink text={"Calendar"} URL={"#"} />
              <FooterLink text={"What's new"} URL={"#"} />
            </div>
            <div className="mb-10">
              <p className="font-bold text-stone-800">Solutions</p>
              <FooterLink text={"Enterprise"} URL={"#"} />
              <FooterLink text={"Small business"} URL={"#"} />
              <FooterLink text={"Personal Use"} URL={"#"} />
              <FooterLink text={"Remote work"} URL={"#"} />
              <FooterLink text={"Startups"} URL={"#"} />
              <FooterLink text={"Eduction"} URL={"#"} />
              <FooterLink text={"Nonprofits"} URL={"#"} />
              <FooterLink text={"Engineering"} URL={"#"} />
              <FooterLink text={"Product"} URL={"#"} />
              <FooterLink text={"Design"} URL={"#"} />
              <FooterLink text={"Managers"} URL={"#"} />
            </div>
          </div>
          <div className="col-span-2 mb-10 md:col-span-1">
            <div className="mb-10">
              <p className="font-bold text-stone-800">Download</p>
              <FooterLink text={"iOS & Android"} URL={"#"} />
              <FooterLink text={"Mac & Windows"} URL={"#"} />
              <FooterLink text={"Calendar"} URL={"#"} />
              <FooterLink text={"Web Clippers"} URL={"#"} />
            </div>
            <div className="mb-10">
              <p className="font-bold text-stone-800">Build</p>
              <FooterLink text={"Integrations"} URL={"#"} />
              <FooterLink text={"Templates"} URL={"#"} />
              <FooterLink text={"API docs"} URL={"#"} />
              <FooterLink text={"Guides & tutorials"} URL={"#"} />
              <FooterLink text={"Hire a consultant"} URL={"#"} />
              <FooterLink text={"Become a partner"} URL={"#"} />
              <FooterLink text={"Become an affiliate"} URL={"#"} />
            </div>
            <div className="mb-10">
              <p className="font-bold text-stone-800">Learn</p>
              <FooterLink text={"Customer stories"} URL={"#"} />
              <FooterLink text={"Help center"} URL={"#"} />
              <FooterLink text={"Webinars"} URL={"#"} />
              <FooterLink text={"Blog"} URL={"#"} />
              <FooterLink text={"Community"} URL={"#"} />
            </div>
          </div>
          <div className="col-span-2 mb-10 md:col-span-1">
            <div className="mb-10">
              <p className="font-bold text-stone-800">Get started</p>
              <FooterLink text={"Switch from Confluence"} URL={"#"} />
              <FooterLink text={"Switch from Asana"} URL={"#"} />
              <FooterLink text={"Switch from Evernote"} URL={"#"} />
              <FooterLink text={"Compare vs Monday"} URL={"#"} />
              <FooterLink text={"Compare vs Clickup"} URL={"#"} />
              <FooterLink text={"Compare vs Jira"} URL={"#"} />
            </div>
            <div className="mb-10">
              <p className="font-bold text-stone-800">Resources</p>
              <FooterLink text={"Pricing"} URL={"#"} />
              <FooterLink text={"About us"} URL={"#"} />
              <FooterLink text={"Careers"} URL={"#"} />
              <FooterLink text={"Media kit"} URL={"#"} />
              <FooterLink text={"Email us"} URL={"#"} />
              <FooterLink text={"Security"} URL={"#"} />
              <FooterLink text={"Cookie settings"} URL={"#"} />
              <FooterLink text={"Terms & privacy"} URL={"#"} />
              <FooterLink text={"California Privacy Notice"} URL={"#"} />
              <FooterLink text={"Status"} URL={"#"} />
            </div>
          </div>
          <div className="col-span-3 mb-10 md:col-start-2">
            <p className="font-bold text-stone-800">Do not share my info</p>
            <p className="text-xl font-semibold transition text-stone-400 hover:underline">
              © 2024 Notion Labs, Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
