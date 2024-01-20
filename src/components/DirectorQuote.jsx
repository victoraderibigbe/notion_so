
const DirectorQuote = ({ quote, author, role, logo, altText }) => {
  return (
    <div>
        <div className="w-full p-2 mx-auto font-normal text-center md:w-2/4">
            <i className="text-3xl md:text-4xl">"{quote}"</i>
        </div>
        <div className="justify-center block w-4/5 mx-auto mt-3 mb-3 text-center md:text-start md:flex md:w-2/5 px-auto">
            <div>
                <img src={logo} alt={altText} className="mx-auto" />
            </div>
            <div>
                <strong>{author}</strong>
                <p>{role}</p>
            </div>
        </div>
    </div>
  )
}

export default DirectorQuote