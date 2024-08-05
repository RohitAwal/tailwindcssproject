
import Button from "../compontents/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"
const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>Discover Stylish Nike arrivalas, quality comfort and innovation fior your active life</p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero