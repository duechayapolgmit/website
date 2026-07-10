export default function Header({text, subtext, image}: {text: string, subtext: string, image: string}) {
    return (
        <div className="flex flex-wrap bg-black/75 bg-blend-overlay px-7 md:px-6 py-25 md:py-50"
             style={{ backgroundImage: `url('${image}')` }}>
            <div>
                <h1 className="text-7xl font-metropolis-black uppercase">{text}</h1>
                <div className="text-2xl">{subtext}</div>
            </div>
        </div>
    )
}