import YearHero from "../Components/yearsComponents/YearHero";
import JourneyIntro from "../Components/yearsComponents/JourneyIntro";
import Discoveries from "../Components/yearsComponents/Discoveries";
import MoreAdventures from "../Components/yearsComponents/MoreAdventures";
import { year2023 } from "./data.js";

const Year2023 = () => {
    return(
        <>
            <YearHero {...year2023.hero}></YearHero>
            <JourneyIntro {...year2023.journey}/>
            <Discoveries {...year2023.discoveries} />
            <MoreAdventures {...year2023.moreAdventures} />
        </>
    );
};

export default Year2023;