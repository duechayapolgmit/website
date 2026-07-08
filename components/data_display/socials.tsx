import Image from 'next/image';

import config from '@/config.json'
import { getSocials } from '@/lib/socials';

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
      <div className="flex">
        {lst}
      </div>
    )
    
  }

  const social = (soc: string) => {
    const data = getSocials(soc, type)
    return (
      <a key={data.name} className="mx-2" target={"_blank"} href={data.link}>
        <Image alt={data.name} src={data.icon} width={size} height={size}/>
      </a>
    )
  }

  return (
    <div>
      {socials(type)}
    </div>
  )
}
