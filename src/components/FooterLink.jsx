const FooterLink = ({ text, URL }) => {
  return (
    <div>
      <a
        href={URL}
        className="text-xl font-semibold leading-8 transition text-stone-500 hover:text-blue-500 hover:underline"
      >
        {text}
      </a>
    </div>
  );
};

export default FooterLink;
