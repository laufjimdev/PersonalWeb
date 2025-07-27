import YearHero from "../Components/yearsComponents/YearHero";
import JourneyIntro from "../Components/yearsComponents/JourneyIntro";
import Discoveries from "../Components/yearsComponents/Discoveries";
import MoreAdventures from "../Components/yearsComponents/MoreAdventures";

const Year2023 = () => {
    return(
        <>
            <YearHero backgroundImage="/assets/bg2.jpeg" year="2023" title="New World Discoveries" description="My first year of serious travel took me across North America, discovering diverse landscapes and cultures"></YearHero>
            <JourneyIntro />
            <Discoveries />
            <MoreAdventures btnTxt="2022 European Tour" />
        </>
    );
};

export default Year2023;