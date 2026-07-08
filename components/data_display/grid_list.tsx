import Image from 'next/image';

export interface IGridListElement {
    icon: string,
    header: string,
    lst: string[]
}

export default function GridList({elements} : {elements: IGridListElement[]}) {
    const getList = (lst: string[]) => {
        const lstParts = lst.map((item) => {
            return (
                <div>{item}</div>
            )
        })

        return (<div>{lstParts}</div>)
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
                    <div className='text-xl'>{getList(item.lst)}</div>
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