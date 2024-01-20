import notionLogo from "../assets/images/Notion-logo.svg.png";

const NotionLogo = () => {
  return (
    <>
      <a href="#" className="cursor-pointer">
        <div className="flex text-xl font-bold text-black">
          <img src={notionLogo} width={"30"} alt="" />
          <p className="mt-2">Notion</p>
        </div>
      </a>
    </>
  );
};

export default NotionLogo;
