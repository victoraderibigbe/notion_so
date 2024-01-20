import { FaArrowRight } from "react-icons/fa6"

const MyButton = ({ btnTitle, btnArrow }) => {
  return (
    <div>
        <button className="btn btn-dark">
            {btnArrow ? (
                <div className="flex items-center">
                    <span className="mr-2">{btnTitle}</span>
                    <span>
                    <FaArrowRight />
                    </span>
                </div>
            ) : (
                <div>
                    {btnTitle}
                </div>
            )
            }
        </button>
    </div>
  )
}

export default MyButton