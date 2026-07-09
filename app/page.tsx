import { Socials } from "@/components/data_display/socials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row flex-1 items-center justify-center min-w-full
                    bg-radial from-teal-400 to-teal-800">
      <div className="flex flex-col flex-1 items-center justify-center max-w-250
                  bg-black/75 font-sans p-4">
        <span className="text-2xl font-metropolis-black uppercase">This is</span>
        <img className="mt-1" src={"/logo.png"}/>
        <div className="mt-3 text-xl">
          Hello, it's me Due, or Duechayapol <i>{"(pronounced Due-cha-ya-pol) "}</i> on the Internet. <br/>
          I am a Thai software engineer, currently living in Ireland, with a Masters in Computing. I also do content creation and live commentary on the side as well, with this tiny thing called MCC Live Show.<br/>
          Below are my projects and portfolio that I have done!
        </div>
        <div className="flex mt-6 content-center items-stretch">
          <HomeButton name="Software / Web Development" link="/dev" />
          <HomeButton name="MCC Live Show" link="/mccliveshow" />
        </div>
        <div className="mt-6"><Socials type={"general"} size={50}/></div>
      </div>
    </div>
  );
}

function HomeButton({name, link}: {name: string, link: string}) {
  // specific for mcc live show logo
  const wrapper = (name: string) => {
    if (name == "MCC Live Show") return (<img src={"mccls-logo.png"}/>)
    return name;
  }

  return (
    <Link href={link} className="border border-white mx-1 p-5 
                    font-metropolis-bold text-3xl uppercase w-90 text-center content-center
                    transition hover:-translate-0.5  hover:bg-black hover:cursor-pointer">
      {wrapper(name)}
    </Link>
  )
}
