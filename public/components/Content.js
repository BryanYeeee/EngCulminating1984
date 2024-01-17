export function Content(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "content",
    className: "p-[2%] my-5 w-2/3 bg-[#e3dcc8]/[0.3] hover:bg-[#e3dcc8]/[0.7] overflow-y-auto duration-500"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[3.5em] font-black flex justify-center"
  }, "- - - THE TIMES - - -"), /*#__PURE__*/React.createElement("div", {
    className: "text-[1.8em] font-[700] border-black border-y-8 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", null, "Sunday, August 24, 1984"), /*#__PURE__*/React.createElement("div", null, "Issue#471"), /*#__PURE__*/React.createElement("div", null, "The Ministry Of Truth")), props.pages[props.curPage]));
}