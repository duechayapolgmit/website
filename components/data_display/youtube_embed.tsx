import { getSocials } from "@/lib/socials";
import Link from "next/link";

export default function YouTubeEmbed ({description, link}: {description: string, link: string}) {
    return (
        <div>
            <div className="text-xl">
                {description}
            </div>
            <div className="flex justify-center pt-2">
                <iframe className="min-w-full min-h-150" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="text-xl pt-3 text-center ">
                <Link className="bg-lime-500 mt-2 mr-2 p-2 text-black rounded-xl"
                      href={getSocials("youtube", "mccliveshow").link} target={"_blank"}>
                    Click here to check out the channel!
                </Link>
            </div>
        </div>
    )
}