import { FaArrowRight } from "react-icons/fa6";

const PageLink = ({ text, URL }) => {
  return (
    <div>
      <a
        href={URL}
        className="flex items-center text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline"
      >
        <span className="mr-2">{text}</span>
        <span>
          <FaArrowRight />
        </span>
      </a>
    </div>
  );
};

export default PageLink;
