
export function Content(props) {

    return (
            <div id="content" className="relative p-[2%] my-5 w-2/3 bg-[#e3dcc8]/[0.3] hover:bg-[#e3dcc8]/[0.7] overflow-y-auto duration-500" ref={props.setRef}>
                <div className="absolute left-0 top-3 text-[#e3dcc8] flex justify-center w-[98%]">Ignorance is Strength. Freedom is Slavery. War is Peace.</div>
                <div className="text-[3.5em] font-black flex justify-center">- - - THE TIMES - - -</div>
                <div className="text-[1.8em] font-[700] border-black border-y-8 flex justify-between items-center">
                    <div className="w-1/3 flex justify-center">August {22+props.curPage}, 1984</div>
                    <div className="w-1/3 flex justify-center">Issue#{471+props.curPage}</div>
                    <div className="w-1/3 flex justify-center">Minitrue</div>
                </div>
                {props.pages[props.curPage]}
                <div className="text-[#e3dcc8] flex justify-center w-full">BIG BROTHER IS WATCHING YOU.</div>
            </div>
    );
}