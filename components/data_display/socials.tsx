import Image from 'next/image';

import config from '@/config.json'
import { getSocials } from '@/lib/socials';
import Link from 'next/link';

interface ISocial {
  name: string,
  icon: string,
  link: string
}

export function Socials({type, size}: {type: string, size: number}) {

  const socials = (type: string) => {
    let data: string[] = [];
    switch (type) {
      case "general":
        data = config.home.socials;
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

  const social = (soc: string) => {
    const data = getSocials(soc, type)
    return (
      <Link key={data.name} className="mx-1 hover:border-white border border-transparent p-1 transition" target={"_blank"} href={data.link}>
        <Image alt={data.name} src={data.icon} width={size} height={size}/>
      </Link>
    )
  }

  return (
    <div>
      {socials(type)}
    </div>
  )
}
