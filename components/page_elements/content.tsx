export default function Content({header = "", content}: {header: string, content: any}) {
    return (
        <div className="bg-white text-black p-6">
            {header == "" ? "" : 
                <h1 className="font-metropolis-black text-5xl uppercase">
                    {header}
                </h1>}
            <div className="pt-6">
                {content}
            </div>
        </div>
    )
}