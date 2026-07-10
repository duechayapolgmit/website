import Description from "@/components/data_display/description";
import Grid, { IGridOptions } from "@/components/data_display/grid";
import { Socials, ISocialsOptions } from "@/components/data_display/socials";
import YouTubeEmbed from "@/components/data_display/youtube_embed";
import Content, { IContentOptions } from "@/components/page_elements/content";
import Header from "@/components/page_elements/header";

import config from '@/config.json'
import dataContent from '@/data/mccliveshow/content.json';
import dataStatistics from '@/data/mccliveshow/statistics.json';

const description = ` 
    Established in 2021, MCC Live Show has been one of the channels covering the popular Minecraft tournament, MC Championship (or MCC for short), and has
    become one of my favourite hobbies I partook in, when it comes to content creation on YouTube.
    From the main staple of live commentaries, clip compilations, to video analysis, MCC Live Show provides plenty of content for MCC viewers alike.
                    `

const socialsOptions: ISocialsOptions = {invert: true}
const statsGridOptions: IGridOptions = {bigHeaders: true}
const statsContentOptions: IContentOptions = {contentPaddingHeight: 6}
const ytContentOptions: IContentOptions = {noBackgroundColourOnImage: true}

export default function Page() {
    return (
        <div>
            <Header text="Live commentary at its finest." 
                    subtext="MCC Live Show is a fan-made project for a Minecraft tournament, MC Championship, but it's not an ordinary fan-made project..."
                    image="/backgrounds/mccliveshow.png"/>
            <Content content={<Description text={description}/>}/>
            <Content content={<Socials type="mccliveshow" size={50} options={socialsOptions}/>}/>
            <Content content={<Grid elements={dataContent} iconSize={90}/>} 
                     background="lightgray"/>
            <Content header="In Numbers" content={<Grid elements={dataStatistics} options={statsGridOptions}/>} footer="As of June 2026" 
                     backgroundImage="/mccliveshow/backgrounds/statistics.png"
                     options={statsContentOptions}/>
            <Content header="Want a taste?" 
                     content={<YouTubeEmbed description="If you are curious and want to find out more, here's a live commentary stream I did!" link={config.mccliveshow.video_link}/>}
                     backgroundImage="/mccliveshow/backgrounds/liveshow.png"
                     options={ytContentOptions}/>
        </div>)
}