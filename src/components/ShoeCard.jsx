const ShoeCard = ({ imgURL, curImgURL, changeShoeURL }) => {
    const handleClick = ()=>{
        if(curImgURL !== imgURL.bigShoe){
            changeShoeURL(imgURL.bigShoe)
        }
    }
  return (
    <div className={
        `border-2 rounded-xl
        ${ curImgURL === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
        cursor-pointer max-sm:flex-1
        `
    }
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail} alt="shoeIMG" width="127px" height="103px" className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard