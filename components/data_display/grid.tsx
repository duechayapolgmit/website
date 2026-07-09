import Image from 'next/image';

export interface IGridElement {
    icon: string,
    header: string,
    description?: string,
    lst?: string[]
}

export default function Grid({elements}: {elements: IGridElement[]}) {
    const getContent = (item: IGridElement) => {
        let content = [];

        if (item.description != null) content.push(<GridContentText text={item.description}/>)
        if (item.lst != null) content.push(<GridContentList lst={item.lst}/>)
        
        return (
            <div>
                {content}
            </div>
        )
        
    }

    const getGrid = () => {
        const lstParts = elements.map((item) => {
            return (
                <div key={item.header} className='flex flex-col flex-1 text-center items-center'>
                    <div className='bg-cyan-900 rounded-3xl'>
                        <Image src={item.icon} width={100} height={100} alt={item.header}/>
                    </div>
                    <h1 className='font-metropolis-bold text-3xl'>
                        {item.header}
                    </h1>
                    <div className='text-xl'>{getContent(item)}</div>
                </div>
            )
        });

        return (
            <div className='w-full flex flex-row flex-auto justify-around'>
                {lstParts}
            </div>
        )
    }

    return (
        <div>
            {getGrid()}
        </div>
    )

}

function GridContentText({text}: {text: string}) {
    return (
        <div>
            {text}
        </div>
    )
}

function GridContentList({lst}: {lst: string[]}) {
    const lstParts = lst.map((item) => {
        return (
            <div key={item}>{item}</div>
        )
    })

    return (<div>{lstParts}</div>)
}