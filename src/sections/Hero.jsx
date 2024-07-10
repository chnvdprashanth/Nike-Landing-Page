import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"


const Hero = () => {
  const [shoeURL, setShoeURL] = useState(bigShoe1)
  return (
    <section id="home" className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">Our Summer Collections</p>
        <h1 className="mt-14 font-palanquin text-8xl max-sm:text-[72px] sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> The New Arrival </span>
          <br />
          <span className="text-coral-red inline-block max-xl:mt-3 mt-10"> Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg sm:max-w-sm my-8 mb-14 text-slate-gray leading-8">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stats,index)=>(
              <div key={stats.label}>
                <p className="font-palanquin text-4xl font-bold">
                  {stats.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stats.label}
                </p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-1 relative justify-center items-center xl:min-h-screen max-xl:py-40  bg-primary bg-hero bg-cover bg-center">
        <img src={shoeURL} alt="shoe collection" width="610px" height="502px" className="object-contain relative z-10"/>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {
            shoes.map((image,index) => (
              <div key={index}>
                <ShoeCard index={index} imgURL={image}
                curImgURL={shoeURL} 
                changeShoeURL={(shoe)=> {setShoeURL(shoe)}} />
              </div>
            ))
          }
        </div>
      </div>


    </section>
  )
}

export default Hero