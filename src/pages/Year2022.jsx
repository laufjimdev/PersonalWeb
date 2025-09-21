import YearHero from "../Components/yearsComponents/YearHero";
import JourneyIntro from "../Components/yearsComponents/JourneyIntro";
import Discoveries from "../Components/yearsComponents/Discoveries";
import MoreAdventures from "../Components/yearsComponents/MoreAdventures";
import { year2022 } from "./data.js";
const Year2022 = () => {
    return(
        <>
            <YearHero {...year2022.hero}></YearHero>
            <JourneyIntro {...year2022.journey}/>
            <Discoveries {...year2022.discoveries} />
            <MoreAdventures {...year2022.moreAdventures} />
        </>
    );
};

export default Year2022;