import PageLink from "./PageLink";

const SectionCard = ({
  icon,
  title,
  text,
  image,
  altText,
  imgStyle,
  linkText,
  URL,
  customStyle,
  hover,
}) => {
  const cardStyle = () => {
    if (hover) {
      return "h-full p-5 rounded-lg bg-stone-100 card-box hover:bg-stone-200 cursor-pointer";
    }
    return "h-full p-5 rounded-lg bg-stone-100 card-box";
  };

  return (
    <>
      <div className={cardStyle()}>
        <div>
          {icon}
          {customStyle ? (
            <h3 className={customStyle}>{title}</h3>
          ) : (
            <h3 className="mb-3">{title}</h3>
          )}
          <p className="text-2xl">{text}</p>
        </div>
        <div className="relative mt-5">
          {imgStyle ? (
            <img src={image} className={imgStyle} alt={altText} />
          ) : (
            <img src={image} alt={altText} />
          )}
        </div>
        {linkText ? <PageLink text={linkText} URL={URL} /> : <div></div>}
      </div>
    </>
  );
};

export default SectionCard;
