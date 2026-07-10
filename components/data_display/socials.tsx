import Image from 'next/image';

import config from '@/config.json'
import { getSocials } from '@/lib/socials';
import Link from 'next/link';

export interface ISocialsOptions {
  invert?: boolean
}

export function Socials({type, size, options}: {type: string, size: number, options?: ISocialsOptions}) {

  const socials = (type: string) => {
    let data: string[] = [];
    switch (type) {
      case "general":
        data = config.home.socials;
        break;
      case "mccliveshow":
        data = config.mccliveshow.socials;
    }
    const lst = data?.map((soc: string) => {
      return (social(soc))
    })
    return (
      <div className="flex align-center">
        {lst}
      </div>
    )
    
  }

  const socialImageStyle = () => {
    if (options?.invert) return {filter: 'invert(100%)'}
    return {}
  }

  const social = (soc: string) => {
    const data = getSocials(soc, type)
    return (
      <Link key={data.name} className={`mx-1 ${options?.invert ? "hover:border-black" : "hover:border-white"} border border-transparent p-1 transition`} target={"_blank"} href={data.link}>
        <Image alt={data.name} src={data.icon} width={size} height={size}
               style={socialImageStyle()}/>
      </Link>
    )
  }

  return (
    <div className='flex justify-center'>
      {socials(type)}
    </div>
  )
}
