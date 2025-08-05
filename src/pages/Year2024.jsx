import YearHero from "../Components/yearsComponents/YearHero";
import JourneyIntro from "../Components/yearsComponents/JourneyIntro";
import Discoveries from "../Components/yearsComponents/Discoveries";
import MoreAdventures from "../Components/yearsComponents/MoreAdventures";
import { year2024 } from "./data";

const Year2024 = () => {
    return(
        <>
            <YearHero {...year2024.hero}></YearHero>
            <JourneyIntro {...year2024.journey}/>
            <Discoveries {...year2024.discoveries} />
            <MoreAdventures {...year2024.moreAdventures} />
        </>
    );
};

export default Year2024;