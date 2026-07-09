export default function Content(
    {header = "", content, background = "white", backgroundImage = ""}: 
    {header?: string, content: any, background?: string, backgroundImage?: string}) 
{
    const getClassName = () => {
        if (backgroundImage) return "bg-black/75 bg-blend-overlay text-white p-6"
        if (background) return "bg-white text-black p-6";
    }
    const getStyle = () => {
        if (backgroundImage) return {backgroundImage: `url('${backgroundImage}'`};
        if (background) return {backgroundColor: background};
    }

    return (
        <div className={getClassName()}
            style={getStyle()}>
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