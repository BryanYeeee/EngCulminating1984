import { Content } from "./Content.js";
function App(props) {
  const warSwapRef = React.useRef();
  const contentRef = React.useRef();
  let [curPage, setPage] = new React.useState(0);
  let [products, setProducts] = new React.useState([[145, 95, 165, 300, 105], [20, 15, 10, 35, 18], [145, 95, 165, 300, 105], [20, 15, 10, 35, 18], 20]);
  let [warTarget, setWarTarget] = new React.useState('Eurasia');
  const page0 = /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "HATE WEEK BEGINS"), /*#__PURE__*/React.createElement("div", {
    className: "subtitle"
  }, "In an inspiring display of solidarity, citizens of Airship One flooded the streets to show their hatred towards ", warTarget, "."), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-content gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-1/3"
  }, "Driven by their shared plusgood enthusiasm to destroy ", warTarget, ", huge crowds of people surged through the streets in roaring hatred. As the masses marched in unison, thousands of voices could be heard shouting the barking rhythms of the Hate Song. As the song continued to be sung throughout the day and night,"), /*#__PURE__*/React.createElement("div", {
    className: "w-1/3"
  }, "its passion and resonance carried across miles.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Every corner of the city became filled with statues and waxwork displays. Banners adorned with images of Big Brother and were proudly draped across every building setting the perfect environment for Hate Week to happen."), /*#__PURE__*/React.createElement("div", {
    className: "w-1/3 flex flex-col"
  }, "In addition to the Big Brother banners, citizens also hung up scarlet banners with the faces of our ", warTarget + "n", " enemies.", /*#__PURE__*/React.createElement("div", {
    className: "flex-grow flex items-center"
  }, /*#__PURE__*/React.createElement("img", {
    className: "border-2 border-black",
    src: "./assets/VCoffeeAd.png"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, "The citizens deserve recognition for their enthusiastic involvement in expressing their anger towards ", warTarget, ". Hate Week has not just started, but it has erupted into a glorious display of hatred against ", warTarget, "."), /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-black text-sm p-2 my-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b-2 border-slate-900 text-xl pl-6 mb-2"
  }, "Miniplenty's Forecast"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[0][0], " Million Shoes Produced | +", products[1][0], "%"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[0][1], " Million Cups Produced | +", products[1][1], "%"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[0][2], " Million Chocolate Bars Produced | +", products[1][2], "%"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[0][3], " Million Foodstuffs Produced | +", products[1][3], "%"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[0][4], " Thousand Houses Built | +", products[1][4], "%"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, "The new, happy life Big Brother has bestowed upon us, shows a plusgood increase in production!")));
  const page1 = /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, (warTarget + "n").toUpperCase(), " ATTACKS UPRISE"), /*#__PURE__*/React.createElement("div", {
    className: "subtitle"
  }, "Screams of chaos roar throughout the streets of Airstrip One as Hate Week begins. "), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-content gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-1/3 flex flex-col"
  }, warTarget + "n", " rocket bombs are drastically becoming more frequent in their attempt to breach our impenetrable borders. Miniluv reports a significant increase in the death toll as a result of these ruthless and malicious attacks.", /*#__PURE__*/React.createElement("div", {
    className: "flex-grow flex items-center"
  }, /*#__PURE__*/React.createElement("img", {
    className: "border-2 border-black",
    src: "./assets/VGinAd.png"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "w-2/3 flex flex-col gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-content gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-1/2"
  }, ' ' + warTarget, "\u2019s orchestrated bombardments leave hospitals, stores, and office buildings fullwise destroyed. Residential buildings, once home to our many innocent children, now lie in ruin, leaving the air polluted by smoke and flames."), /*#__PURE__*/React.createElement("div", {
    className: "w-1/2"
  }, warTarget, "\u2019s aggression stands as a testament to their barbarity and utter disregard for the life of Oceania\u2019s citizens. Despite these attacks, the resilience of The Party does not hesitate to fight back. Reports from Minipax reveal the bravery demonstrated by our valiant frontlines.")), /*#__PURE__*/React.createElement("div", null, "They are consistently prevailing in the battle to defend our glorious homeland. The collective will of our people, guided by the wisdom of Big Brother, remains an unstoppable force against ", warTarget, "\u2019s attempts to challenge the strength of our great country."))), /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-black text-sm p-2 my-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b-2 border-slate-900 text-xl pl-6 mb-2"
  }, "Miniplenty's Forecast"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[2][0], " Million Shoes Produced | +", products[3][0], "%"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[2][1], " Million Cups Produced | +", products[3][1], "%"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[2][2], " Million Chocolate Bars Produced | +", products[3][2], "%"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[2][3], " Million Foodstuffs Produced | +", products[3][3], "%"), /*#__PURE__*/React.createElement("div", null, "\u2022 ", products[2][4], " Thousand Houses Built | +", products[3][4], "%"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, "Big Brother has risen the quality of our new, happy life in Oceania by no less than ", products[4], "% over the past year!")));
  const page2 = /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "GOLDSTEIN ATTACKS IN LONDON SQUARE"), /*#__PURE__*/React.createElement("div", {
    className: "subtitle"
  }, "As nighttime struck, crowds of people reportedly filled up one of the central London squares. "), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-content gap-8"
  }, /*#__PURE__*/React.createElement("div", null, "The sky was lit up by mesmerizing scarlet banners, each displaying the faces of our plusungood ", warTarget + "n", " enemies. Trumpets were blaring in the background alongside the rolling of drums and stomping feet."), /*#__PURE__*/React.createElement("div", null, "Sounds of planes, tanks, and guns filled the city as they stormed in around the sea of several thousand faces. The Junior Spies joined in, fearlessly asserting their voices, cutting through the air with an unmatched intensity."), /*#__PURE__*/React.createElement("div", null, "In a remarkable display of youthful determination, their hateful expressions truly stood out, highlighting the passion and strength behind Oceania\u2019s next generation.", ' ' + warTarget, " will get what they deserve for their disrespect towards Big Brother, with the voices of the public proving it to be true.")), /*#__PURE__*/React.createElement("div", {
    className: "subtitle"
  }, "The great orator of our Inner Party ascended onto the scarlet pedestal and towered over the London square."), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-content gap-8"
  }, /*#__PURE__*/React.createElement("div", null, "His authoritative gaze swept across the sea of faces, igniting the crowd to begin shouting their supportive hatred louder. Their collective hatred reached an intensity no other nation could compete with."), /*#__PURE__*/React.createElement("div", null, "The harmonious sounds of shouting and hatred, an achievement only accomplishable by Big Brother, show just how inferior ", warTarget, " is in comparison to our magnificent country."), /*#__PURE__*/React.createElement("div", null, "The orator began his inspiring speech, informing the masses of the state of our country and our progress in our violent conflicts at the ", warTarget + "n", " borders.")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between gap-6 my-8"
  }, /*#__PURE__*/React.createElement("img", {
    className: "",
    src: "./assets/OratorSpeech.png"
  }), /*#__PURE__*/React.createElement("div", null, "\u201COur forces in South India have won yet again in a ruthless battle against the ", warTarget + "n", " forces. Our borders have expanded immensely and we will continue to push into ", warTarget + "n", " territory and claim the land that belongs to us! This war against Eastasia will soon come to an end, Comrades!\u201D - The Orator")), /*#__PURE__*/React.createElement("div", {
    className: "subtitle"
  }, " Suddenly, the glorious celebration of hatred that was happening quickly turned into a doubleplusungood  disaster."), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-content gap-8",
    ref: warSwapRef
  }, /*#__PURE__*/React.createElement("div", null, "All the banners around the square had been sabotaged and were decorated all wrong. The horrendous scarlet banners, which were supposed to have the faces of our Eastasian enemies, have been replaced by the faces of our Eurasian allies."), /*#__PURE__*/React.createElement("div", null, "Countless insider reports have come to the conclusion that this was the work of Goldstein\u2019s sinister agents. Many goodwise trained Junior Spies effortlessly climbed over rooftops cutting down streamers and taking down banners."), /*#__PURE__*/React.createElement("div", null, "Plusgood samaritans all around the square quickly went to work destroying the sabotaged banners, tearing down the Goldstein propaganda instantly. Once all of Goldstein\u2019s revolting banners were abolished and torn down, the orator concluded his grand speech and walked off the stage. The war against Eastasia continues, but Oceania, alongside our Eurasian allies, will not back down.")));
  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };
  const changePage = incr => {
    if (incr == -1) {
      setPage(curPage - 1 == -1 ? curPage : curPage - 1);
    } else {
      setPage(curPage + 1 == 3 ? curPage : curPage + 1);
    }
    let newProducts = products;
    if (curPage + incr == 0) {
      for (let i = 0; i < 5; i++) {
        newProducts[0][i] = random(90, 301);
        newProducts[1][i] = random(10, 26);
      }
      setProducts(newProducts);
    }
    if (curPage + incr == 1) {
      for (let i = 0; i < 5; i++) {
        newProducts[3][i] = random(26, 37);
        newProducts[2][i] = Math.floor(newProducts[0][i] * (newProducts[3][i] * 0.01 + 1));
      }
      newProducts[4] = random(15, 26);
      setProducts(newProducts);
    }
    contentRef.current.scrollTop = 0;
  };
  const pages = [page0, page1, page2];
  React.useEffect(() => {
    if (curPage == 2) {
      const observer = new IntersectionObserver((entries, observer) => {
        if (warTarget == 'Eurasia') {
          const entry = entries[0];
          console.log('entry.isIntersecting', entry.isIntersecting);
          if (entry.isIntersecting) {
            setTimeout(() => setWarTarget('Eastasia'), 10000);
            observer.disconnect();
          }
        }
      });
      observer.observe(warSwapRef.current);
    }
  }, [curPage]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-4/5 flex justify-center"
  }, /*#__PURE__*/React.createElement(Content, {
    curPage: curPage,
    pages: pages,
    setRef: contentRef
  })), /*#__PURE__*/React.createElement("div", {
    id: "control",
    className: "w-1/5 absolute h-full right-0 top-0 bg-[#2E2C2D] border-[#4d4d4d] border-x-[20px] p-[15px] outline-[15px] flex flex-col justify-around"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-64 text-white flex justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-full bg-zinc-900 w-60 h-60 flex flex-col justify-around items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-around items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-48 w-28 flex justify-around items-center",
    onClick: () => changePage(-1)
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-600 w-0 h-0 border-y-[40px] border-y-zinc-900 border-r-[80px] border-r-slate-600 duration-150 " + (curPage == 0 ? "border-r-zinc-900" : "hover:border-r-slate-800")
  })), /*#__PURE__*/React.createElement("div", {
    className: "h-48 w-28 flex justify-around items-center",
    onClick: () => changePage(1)
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-600 w-0 h-0 border-y-[40px] border-y-zinc-900 border-l-[80px] border-l-slate-600 duration-150 " + (curPage == 2 ? "border-l-zinc-900" : "hover:border-l-slate-800")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-8 flex justify-center text-white"
  }, curPage + 1, "/3"))), /*#__PURE__*/React.createElement("div", {
    className: "h-1/2 flex flex-col justify-around"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-900 border-slate-400 border-t-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex justify-center text-slate-400"
  }, "INGSOC"))));
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root);
root.render( /*#__PURE__*/React.createElement(App, null));