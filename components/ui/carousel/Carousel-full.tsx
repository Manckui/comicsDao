import Image from "next/future/image"
import arrow from "public/img/icon/arrow.svg"
import close from "public/img/icon/close.png"
import carosuelImg from "public/img/carousel_full/1.png"

const CarouselFull = ({ onClick, isOpen }) => {
  return (
    <div
      className={`fixed z-30 backdrop-blur left-0 top-0 bottom-0 right-0 h-screen w-screen transition-all ${
        isOpen == true
          ? " opacity-0 scale-0 -z-30"
          : " opacity-100 scale-100 z-30"
      }`}
    >
      <div className="flex items-center justify-center h-full w-full">
        <a
          className="absolute top-[30px] right-[20px] md:right-[40px] bg-yellow-100 border-solid border-2 border-black-100 h-[50px] w-[50px] flex items-center justify-center rounded-full p-4 lg:hover:bg-orange cursor-pointer transition-all"
          onClick={onClick}
        >
          <Image
            src={close}
            alt="close"
            height={20}
            width={20}
            className=" rotate-90"
          />
        </a>
        <div className="relative">
          <a className="animate-bounce absolute top-1/2 -left-[25px] md:-left-[35px] lg:-left-[90px] bg-yellow-100 border-solid border-2 border-black-100 h-[50px] md:h-[70px] w-[50px] md:w-[70px] flex items-center justify-center rounded-full p-4 lg:hover:bg-orange cursor-pointer transition-all">
            <Image
              src={arrow}
              alt="arrow left"
              height={20}
              width={20}
              className=" rotate-90"
            />
          </a>
          <div className="w-[85vw] md:w-[60vw] lg:w-[450px]">
            <Image
              src={carosuelImg}
              alt="comic"
              className={`h-full w-full rounded-3xl object-cover object-center`}
            />
          </div>
          <a className="animate-bounce absolute top-1/2 -right-[25px] md:-right-[35px] lg:-right-[90px] bg-yellow-100 border-solid border-2 border-black-100 h-[50px] md:h-[70px] w-[50px] md:w-[70px] flex items-center justify-center rounded-full p-4 lg:hover:bg-orange cursor-pointer transition-all">
            <Image
              src={arrow}
              alt="arrow right"
              height={20}
              width={20}
              className="-rotate-90"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CarouselFull