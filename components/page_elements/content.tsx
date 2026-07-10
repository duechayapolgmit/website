export interface IContentOptions {
    headerPaddingHeight?: number,
    contentPaddingHeight?: number,
    noBackgroundColourOnImage?: boolean
}

export default function Content(
    {header = "", content, footer = "", background = "white", backgroundImage = "", options}: 
    {header?: string, content: any, footer?: string, background?: string, backgroundImage?: string, options?: IContentOptions}) 
{
    const getAllClassName = () => {
        let res = 'p-6 '

        if (!options?.noBackgroundColourOnImage) res += "bg-black/75 bg-blend-overlay ";
        if (backgroundImage) res += 'text-white ';
        if (background && !backgroundImage) res += "bg-white text-black ";
        
        return res;
    }
    const getAllStyle = () => {
        if (backgroundImage) return {backgroundImage: `url('${backgroundImage}'`};
        if (background) return {backgroundColor: background};
    }

    const getContentStyle = () => {
        if (options?.contentPaddingHeight != null) return {
            paddingTop: options.contentPaddingHeight+"em", 
            paddingBottom: options.contentPaddingHeight+"em"};
        return {};
    }

    const getHeaderStyle = () => {
        if (options?.headerPaddingHeight != null) return {
            paddingBottom: options.headerPaddingHeight+"em"};
        return {paddingBottom: "0.5em"};
    }

    return (
        <div className={getAllClassName()}
            style={getAllStyle()}>
            {header == "" ? "" : 
                <h1 className="font-metropolis-black text-5xl uppercase"
                    style={getHeaderStyle()}>
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