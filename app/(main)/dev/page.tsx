import Content from "@/components/page_elements/content";
import GridList, { IGridListElement } from "@/components/data_display/grid_list";
import Header from "@/components/page_elements/header";

import dataTechStack from '@/data/dev/tech_stack.json'

export default function Page() {
    const techStack: IGridListElement[] = dataTechStack;

    return (
        <div>
            <Header text="Coding is my passion." 
                    subtext="From a gamer to a maker, I have been passionate about computing since when I was young, 
                    and now pursuing a path to create solutions for others via programming and software engineering, 
                    as well as making some fun stuff!"
                    image="/backgrounds/dev.png"/>
            <Content header={"My Tech Stack"} content={<GridList elements={techStack}/>}/>
            projects
        </div>)
}