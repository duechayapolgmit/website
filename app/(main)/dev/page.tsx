import Content from "@/components/page_elements/content";
import Grid, { IGridElement } from "@/components/data_display/grid";
import Header from "@/components/page_elements/header";
import CardGrid, { ICard } from "@/components/data_display/card_grid";

import dataTechStack from '@/data/dev/tech_stack.json'
import dataPortfolio from '@/data/dev/projects.json'

export default function Page() {

    const techStack: IGridElement[] = dataTechStack;
    const portfolio: ICard[] = dataPortfolio;

    return (
        <div>
            <Header text="Coding is my passion." 
                    subtext="From a gamer to a maker, I have been passionate about computing since when I was young, 
                    and now pursuing a path to create solutions for others via programming and software engineering, 
                    as well as making some fun stuff!"
                    image="/backgrounds/dev.png"/>
            <Content header={"My Tech Stack"} content={<Grid elements={techStack}/>}/>
            <Content header={"My Portfolio"} content={<CardGrid elements={portfolio}/>} background="lightgray"/>
        </div>
    )
}