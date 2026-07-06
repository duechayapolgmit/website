import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <img className="my-1.5" src={"/logo.png"}/>
      <Socials type={"general"} size={50}/>
    </div>
  );
}
