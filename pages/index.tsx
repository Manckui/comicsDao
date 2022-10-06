import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/future/image"
import notion from "public/img/icon/notion.png"
import discord from "public/img/icon/discord.png"
import twitter from "public/img/icon/twitter.png"
import juice from "public/img/icon/juice.png"
import arrow from "public/img/icon/arrow.svg"
import style from "styles/shared/navbar.module.scss"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Comics Dao</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="py-[70px] px-[40px] flex justify-between flex-col h-screen pb-[80px]">
          <p className="font-londrina text-8xl md:text-9xl text-black-100 relative">
            Comics
            <br className="md:hidden" />
            DAO
          </p>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 ">
            <a
              className={`font-ubuntu font-normal text-lg  flex items-center relative p-2 w-full ${style.link_after_home}`}
            >
              <div className="mr-3">
                <Image
                  src={discord}
                  alt="discord icon"
                  height={50}
                  width={50}
                />
              </div>
              <p>Discord</p>
            </a>
            <a
              className={`font-ubuntu font-normal text-lg  flex items-center relative p-2 w-full ${style.link_after_home}`}
            >
              <div className="mr-3">
                <Image src={notion} alt="notion icon" height={50} width={50} />
              </div>
              <p>Notion</p>
            </a>
            <a
              className={`font-ubuntu font-normal text-lg  flex items-center relative p-2 w-full ${style.link_after_home}`}
            >
              <div className="mr-3">
                <Image src={twitter} alt="notion icon" height={50} width={50} />
              </div>
              <p>Twitter</p>
            </a>
            <a
              className={`font-ubuntu font-normal text-lg flex items-center relative p-2 w-full ${style.link_after_home}`}
            >
              <div className="mr-3">
                <Image src={juice} alt="notion icon" height={50} width={50} />
              </div>
              <p>Treasury</p>
            </a>
          </div>
          <Link href={"/nouns"}>
            <a className="flex items-center animate-bounce lg:justify-end">
              <p className="font-londrina text-4xl lg:text-6xl font-medium text-black-100 relative">
                Nouns Comics
              </p>
              <span className="ml-3 bg-yellow-100 border-solid border-2 border-black-100 h-[40px] w-[40px] flex items-center justify-center rounded-full p-3 lg:hover:bg-orange cursor-pointer transition-all">
                <Image
                  src={arrow}
                  alt="arrow right"
                  height={20}
                  width={20}
                  className="-rotate-90"
                />
              </span>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
