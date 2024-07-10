import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgURL} alt="customerImage" className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} alt="" width={24} height={24} className="object-contain m-0" />
            <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
        </div>
        <h3 className="text-3xl mt-1 font-palanquin font-bold text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard