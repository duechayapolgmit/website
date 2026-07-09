import Description from "@/components/data_display/description";
import Content from "@/components/page_elements/content";
import Header from "@/components/page_elements/header";

const description = ` 
    Established in 2021, MCC Live Show has been one of the channels covering the popular Minecraft tournament, MC Championship. (or MCC for short)
    From the main staple of live commentaries, clip compilations, to video analysis, MCC Live Show has been one of the go-to spots for all
    MCC-related content.
                    `

export default function Page() {
    return (
        <div>
            <Header text="Live commentary at its finest." 
                    subtext="MCC Live Show is a fan-made project for a Minecraft tournament, MC Championship, but it's not an ordinary fan-made project..."
                    image="/backgrounds/mccliveshow.png"/>
            <Content content={<Description text={description}/>}/>
            what live show does<br/>
            statistics<br/>
            watch now!
        </div>)
}