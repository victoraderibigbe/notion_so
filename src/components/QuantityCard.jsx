
const QuantityCard = ({ quantity, text }) => {
  return (
    <div className="p-10 rounded-lg bg-slate-50">
        <h1 className="text-blue-500">{quantity}</h1>
        <p className="text-2xl">{text}</p>
    </div>
  )
}

export default QuantityCard