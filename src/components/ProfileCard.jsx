
const ProfileCard = ({ avatar, name, tag, text, altText }) => {
  return (
    <div className="p-5 rounded-lg bg-slate-50">
        <div className="flex mb-4">
            <div className="mr-4">
                <img src={avatar} alt={altText} />
            </div>
            <div>
              <h4>{name}</h4>
              <h4 className="font-normal text-slate-500">{tag}</h4>
            </div>
        </div>
        <div>
          <p className="text-xl">{text}</p>
        </div>
    </div>
  )
}

export default ProfileCard