import { Content } from "./content.js";

function App(props) {
    const warSwapRef = React.useRef();
    let [curPage, setPage] = new React.useState(0)
    let [warTarget, setWarTarget] = new React.useState('Eurasia')
    let changeTitle = <div className="subtitle" ref={warSwapRef}> Suddenly, the glorious celebration of hatred that was happening, quickly turned into disaster.</div>
    const page0 = (
        <div className="text">
            <div className="title">HATE WEEK BEGINS</div>
            <div className="subtitle">In an inspiring display of solidarity, citizens of Airship One flooded the streets to show their devotion for Big Brother.</div>
            <div className="flex justify-content gap-6">
                <div>
                    Driven by their shared enthusiasm to destroy {warTarget}, huge crowds of people surged through the streets in roaring hatred.
                    As the masses marched in unison, thousands of voices could be heard shouting the barking rhythms of the Hate Song.
                </div>
                <div>
                    As the song continued to be sung throughout the day and night, its passion and resonance carried across miles.
                    Every corner of the city became filled with statues and waxwork displays.
                </div>
                <div>
                    Banners adorned with images of Big Brother and were proudly draped across every building setting the perfect environment for Hate Week to happen.
                    In addition to the Big Brother banners, citizens also hung up scarlet banners with faces of our {warTarget+"n"} enemies.
                </div>
                <div>
                    The citizens deserve recognition for their enthusiastic involvement in expressing their anger towards {warTarget}.
                    Hate Week has not just started, but it has erupted into a glorious display of hatred against {warTarget}.
                </div>
            </div>
        </div>
    )
    
    const page1 = (
        <div className="text">
            <div className="title">{(warTarget+"n").toUpperCase()} ATTACKS UPRISE</div>
            <div className="subtitle">Screams of chaos roar throughout the streets of Airstrip One as Hate Week begins. </div>
            <div className="flex justify-content gap-6">
                <div>
                    {warTarget+"n"} rocket bombs are drastically becoming more frequent in their attempt to breach our impenetrable borders.
                    Miniluv reports a significant increase in the death toll as a result of these ruthless and malicious attacks.
                </div>
                <div>
                    {warTarget}’s orchestrated bombardments leave hospitals, stores, and office buildings completely destroyed.
                    Residential buildings, once home to our many innocent children, now lie in ruin, leaving the air polluted by smoke and flames.
                </div>
                <div>
                    {warTarget}’s aggression stands as a testament to their barbarity and utter disregard for the life of Oceania’s citizens.
                    Despite these attacks, the resilience of The Party does not hesitate to fight back. Reports from Minipax reveal the bravery demonstrated by our valiant frontlines.
                </div>
                <div>
                    They are consistently prevailing in battle to defend our glorious homeland.
                    The collective will of our people, guided by the wisdom of Big Brother, remains an unstoppable force against {warTarget}’s attempts to challenge the strength of our great country.
                    They are consistently prevailing in battle to defend our glorious homeland.
                </div>
            </div>
            <img id="vcoffeead111" className="" src="./assets/VCoffeeAd.png"></img>
        </div>
    )
    
    const page2 = (
        <div className="text">
            <div className="title">GOLDSTEIN ATTACKS IN LONDON SQUARE</div>
            <div className="subtitle">As nighttime striked, crowds of people reportedly filled up one of the central London squares. </div>
            <div className="flex justify-content gap-8">
                <div>
                    The sky was lit up by mesmerizing scarlet banners, each displaying the faces of our {warTarget+"n"} enemies.
                    Trumpets were blaring in the background alongside the rolling of drums and stomping feet.
                </div>
                <div>
                    Sounds of planes, tanks, and guns filled the city as they stormed in around the sea of several thousand faces.
                    The Junior Spies joined in, fearlessly asserting their voices, cutting through the air with an unmatched intensity.
                </div>
                <div>
                    In a remarkable display of youthful determination, their hateful expressions truly stood out, highlighting the passion and strength behind Oceania’s next generation.
                    {' '+warTarget} will get what they deserve for their disrespect towards Big Brother, with the voices of the public proving it to be true.
                </div>
            </div>
            <div className="subtitle">The great orator of our Inner Party ascended onto the scarlet pedestal and towered over the London square.</div>
            <div className="flex justify-content gap-8">
                <div>
                    His authoritative gaze swept across the sea of faces, igniting the crowd to begin shouting their supportive hatred louder.
                    Their collective hatred reached an intensity no other nation could compete with.
                </div>
                <div>
                    The harmonious sounds of shouting and hatred, an achievement only accomplishable by Big Brother, shows just how inferior {warTarget} is in comparison to our magnificent country.
                </div>
                <div>
                    The orator began his inspiring speech, informing the masses of the state of our country and our progress in our violent conflicts at the {warTarget+"n"} borders.
                </div>
            </div>
            <div className="flex justify-between gap-6 my-8">
                <img id="vcoffeead111" className="" src="./assets/OratorSpeech.png"></img>
                <div>
                    “Our forces in South India have won yet again in a ruthless battle against the {warTarget+"n"} forces.
                    Our borders have expanded immensely and we will continue to push into {warTarget+"n"} territory and claim the land that belongs to us!
                    This war against Eastasia will soon come to an end, Comrades!”
                </div>
            </div>
            {changeTitle}
            <div className="flex justify-content gap-8">
                <div>
                    All the banners around the square had been sabotaged and were decorated all wrong.
                    The horrendous scarlet banners, which were supposed to have the faces of our Eastasian enemies, have been replaced by the faces of our {warTarget+"n"} allies.
                </div>
                <div>
                    Countless insider reports have come to the conclusion that this was the work of Goldstein’s sinister agents.
                    The orator began his inspiring speech, informing the masses of the state of our country and our progress in our violent conflicts at the {warTarget+"n"} borders.
                    Many well-trained Junior spies effortlessly climbed over rooftops cutting down streamers and taking down banners.
                </div>
                <div>
                    Good samaritans all around the square quickly went to work destroying the sabotaged banners, tearing down the Goldstein propaganda instantly.
                    Once all of Goldstein’s revolting banners were abolished and torn down, the orator concluded his grand speech and walked off the stage.
                    The war against Eastasia continues, but Oceania alongside our {warTarget+"n"} allies will not back down.
                </div>
            </div>
        </div>
    )
    const pages = [page0, page1, page2];
    React.useEffect(() => {
        if (curPage == 2) {
            const observer = new IntersectionObserver((entries, observer) => {
                if (warTarget=='Eurasia') {
                    const entry = entries[0];
                    console.log('entry.isIntersecting', entry.isIntersecting);
                    if (entry.isIntersecting) {
                        setWarTarget('Eastasia')
                        observer.disconnect();
                    }
                }
            });
            observer.observe(warSwapRef.current);
        }
    }, [curPage]);
    return (
        <>
            <div className="w-4/5 flex justify-center">
                <Content curPage={curPage} pages={pages} changeTitle={changeTitle} />
            </div>
            {/* bg-[#433E40] border-[#030203] border-[30px] */}
            <div id="control" className="box-border m-4 w-1/5 fixed h-full right-[0px] top-0 bg-[#2E2C2D] border-[#C4C2C3] border-x-[15px] p-[15px] outline-[15px] flex flex-col justify-around">
                <div className="h-64 text-white flex justify-center">
                    <div className="rounded-full bg-slate-900 w-64 h-64 flex flex-col justify-around items-center">
                        <div className="flex justify-around items-center">
                            <div className="h-52 w-32 flex justify-around items-center" onClick={() => setPage((curPage - 1 == -1 ? curPage : curPage - 1))}>
                                <div className={"text-slate-600 w-0 h-0 border-y-[40px] border-y-slate-900 border-r-[80px] border-r-slate-600 hover:border-r-slate-800 duration-150 " + (curPage == 0 ? "border-r-slate-900" : "")}>
                                    -
                                </div>
                            </div>
                            <div className="h-52 w-32 flex justify-around items-center" onClick={() => setPage((curPage + 1 == 3 ? curPage : curPage + 1))}>
                                <div className={"text-slate-600 w-0 h-0 border-y-[40px] border-y-slate-900 border-l-[80px] border-l-slate-600 hover:border-l-slate-800 duration-150 " + (curPage == 2 ? "border-l-slate-900" : "")} >
                                    -
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-8 flex justify-center text-white">
                            {curPage + 1}/3
                        </div>
                    </div>
                </div>
                <div className="h-2/5 flex flex-col justify-around">
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                    <div className="w-full h-2 bg-slate-900 border-slate-200 border-t-[2px]" />
                </div>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root)
root.render(<App />);