export default function Header({text, subtext, image}: {text: string, subtext: string, image: string}) {
    return (
        <div className="bg-black/75 bg-blend-overlay px-4 py-50"
             style={{ backgroundImage: `url('${image}')` }}>
            <h1 className="text-7xl font-metropolis-black uppercase">{text}</h1>
            <div className="text-2xl">{subtext}</div>
        </div>
    )
}