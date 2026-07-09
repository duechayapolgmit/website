export interface IContentOptions {
    contentPaddingHeight?: number
}

export default function Content(
    {header = "", content, footer = "", background = "white", backgroundImage = "", options}: 
    {header?: string, content: any, footer?: string, background?: string, backgroundImage?: string, options?: IContentOptions}) 
{
    const getAllClassName = () => {
        if (backgroundImage) return "bg-black/75 bg-blend-overlay text-white p-6"
        if (background) return "bg-white text-black p-6";
    }
    const getAllStyle = () => {
        if (backgroundImage) return {backgroundImage: `url('${backgroundImage}'`};
        if (background) return {backgroundColor: background};
    }

    const getContentStyle = () => {
        if (options?.contentPaddingHeight != null) return {
            paddingTop: options.contentPaddingHeight+"em", 
            paddingBottom: options.contentPaddingHeight+"em"
        };
        return {};
    }

    return (
        <div className={getAllClassName()}
            style={getAllStyle()}>
            {header == "" ? "" : 
                <h1 className="font-metropolis-black text-5xl uppercase pb-6">
                    {header}
                </h1>}
            <div style={getContentStyle()}>
                {content}
            </div>
            {footer == "" ? "" : 
                <div className="font-metropolis text-xl text-center">
                    {footer}
                </div>}
        </div>
    )
}