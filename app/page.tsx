import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <img className="my-1.5" src={"/logo.png"}/>
      <Socials type={"general"} size={50}/>
      <div className="flex my-6 content-center items-stretch">
        <HomeButton name="Software / Web Development"/>
        <HomeButton name="MCC Live Show"/>
      </div>
    </div>
  );
}

function HomeButton({name}: {name: string}) {
  // specific for mcc live show logo
  const wrapper = (name: string) => {
    if (name == "MCC Live Show") return (<img src={"mccls-logo.png"}/>)
    return name;
  }

  return (
    <div className="border border-white mx-1 p-5 
                    font-metropolis-bold text-3xl uppercase w-90 text-center content-center
                    transition hover:-translate-0.5 hover:text-black hover:bg-white hover:cursor-pointer">
      {wrapper(name)}
    </div>
  )
}
