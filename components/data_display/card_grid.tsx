import Image from 'next/image';
import Link from 'next/link';

export interface ICard {
    image: string,
    title: string,
    subtitle?: string,
    description: string,
    link: string,
    tags: string[]
}

export default function CardGrid({elements}: {elements: ICard[]}) {
    
    const getLst = () => {
        const lst = elements.map( (element: ICard) => {
                return (
                    <Card key={element.title} data={element}/>
                )
            }
        )
        return (
            <div className='grid grid-cols-3 gap-3'>
                {lst}
            </div>
        )
    }
    return (
        <div className='flex flex-auto justify-around'>
            {getLst()}
        </div>
    )
}

function Card({data}: {data: ICard}) {
    const getTags = (tags: string[]) => {
        const lst = tags.map((element) => {
            return (
                <div className='bg-cyan-900 mt-2 mr-2 px-2 text-white rounded-xl'>
                    {element}
                </div>
            )
        })
        return (
            <div className='flex flex-wrap'>
                {lst}
            </div>
        )
    }

    return (
        <div className='bg-white w-100 border-2 rounded-3xl overflow-clip'>
            <Image alt={data.title} src={data.image} width={400} height={300}/>
            <div className='p-2'>
                <h1 className='font-metropolis-bold text-3xl'>
                    <Link className='hover:border-b' href={data.link}>
                        {data.title}
                    </Link>
                </h1>
                {data.subtitle ? 
                    <h2>
                        {data.subtitle}
                    </h2> 
                    : ""
                }
                <p className='text-xl mb-2'>
                    {data.description}
                </p>
                <Link className='bg-lime-500 mt-2 mr-2 p-2 text-black rounded-xl' href={data.link}>
                    Link to Project
                </Link>
                <hr className='mt-3'/>
                {getTags(data.tags)}
            </div>
            
        </div>
    )
}