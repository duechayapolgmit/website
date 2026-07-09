export default function YouTubeEmbed ({description, link}: {description: string, link: string}) {
    return (
        <div>
            <div className="text-xl">
                {description}
            </div>
            <div className="flex justify-center pt-2">
                <iframe width="1080" height="607.5" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}