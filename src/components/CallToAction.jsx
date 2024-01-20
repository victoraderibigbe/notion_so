import MyButton from "./MyButton";
import PageLink from "./PageLink";

const CallToAction = ({
  title,
  text,
  btnTitle,
  btnArrow,
  image,
  altText,
  linkText,
  URL,
  imgStyle,
}) => {
  return (
    <>
      <div className="text-center">
        <h1>{title}</h1>
        <h3>{text}</h3>
      </div>
      <div className="flex items-center justify-center mx-auto">
        <div className="mx-3">
          <MyButton btnTitle={btnTitle} btnArrow={btnArrow} />
        </div>
        <div className="mx-3">
          <PageLink text={linkText} URL={URL} />
        </div>
      </div>
      <div className="mt-20">
        <img className={imgStyle} src={image} alt={altText} />
      </div>
    </>
  );
};

export default CallToAction;
