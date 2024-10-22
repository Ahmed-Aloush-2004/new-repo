import React from "react";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-button/index";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mood";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/githut-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tact-toe";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/use-fetch/text";
import UseOnclickOutsideTest from "./components/use-outside-click/text";
import UseWindowResize from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
function App() {
  return (
    <div>
      {/* <StarRating/>*/}
      {/* <ImageSlider/>*/}
      {/* <LoadMoreData/>*/}
      {/* TreeView menus={menus} */}
      {/* <QRCodeGenerator/> */}
      {/*  <LightDarkMode /> */}
      {/*   <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/*   <TabTest/> */}
      {/*   <ModalTest /> */}
      {/*   <GithubProfileFinder /> */}
      {/*   <SearchAutocomplete /> */}
      {/*   <TicTacToe /> */}
      {/*  <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/*   <UseFetchHookTest /> */}
      {/*   <UseOnclickOutsideTest/> */}
      {/*   <UseWindowResize/> */}
      {/*   <ScrollToTopAndBottom/> */}

      <ScrollToSection />
    </div>
  );
}

export default App;
