
export function Content(props) {

    return (
        <>
            <div id="content" className="p-[2%] my-5 w-2/3 bg-[#e3dcc8]/[0.3] hover:bg-[#e3dcc8]/[0.7] overflow-y-auto duration-500">
                <div className="text-[3.5em] font-black flex justify-center">- - - THE TIMES - - -</div>
                <div className="text-[1.8em] font-[700] border-black border-y-8 flex justify-between items-center">
                    <div>Sunday, August 24, 1984</div>
                    <div>Issue#471</div>
                    <div>The Ministry Of Truth</div>
                </div>
                {props.pages[props.curPage]}
            </div>
        </>
    );
}