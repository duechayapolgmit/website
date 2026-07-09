export default function Content(
    {header = "", content, background = "white"}: {header?: string, content: any, background?: string}) 
{
    return (
        <div className="bg-white text-black p-6"
            style={{backgroundColor: background}}>
            {header == "" ? "" : 
                <h1 className="font-metropolis-black text-5xl uppercase pb-6">
                    {header}
                </h1>}
            <div>
                {content}
            </div>
        </div>
    )
}