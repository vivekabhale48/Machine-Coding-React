import './App.css';
import { CustomHookSection } from './customHookImplement/CustomHookSection';
import { SeatBooking } from './MC-1-Seats/SeatBooking';
import { FormValidationSection } from './MC-10-FormValidations/FormValidationSection';
import { DebounceSection } from './MC-11-Debounce/DebounceSection';
import { FolderStructureSection } from './MC-12-FolderStructureSection/FolderStructureSection';
import { AxiosSection } from './MC-13-LearnAxios/AxiosSection';
import { WorkoutTimerSection } from './MC-14-ReactWorkoutTimer/WorkoutTimerSection';
import { AccordianSection } from './MC-15-AccordianSection/AccoordianSection';
import { SearchBar } from './MC-16-SearchDebounceAndModal/SearchBar';
import InfiniteScroll from './MC-17-InfiniteScroll/InfiniteScroll';
import ChessBoard from './MC-18-ChessBoard/chessBoard';
import ReactPureComponentsImplementation from './MC-19-PureComponentsReact/reactPureComponentsImplementation';
import { MainCommentSection } from './MC-2-Comments/MainCommentSection';
import { LazyloadingSection } from './MC-2-LazyLoading/LazyloadingSection';
import { UseReducerHook } from './MC-20-UseReducerHookImplementation/UseReducerHook';
import ParentComponent from './MC-21-sendingDataFromChildToParent/sendDataFromChildToParent';
import ComponentWithModal from './MC-22-ModalUsingReact/ComponentWithModal';
import { TodoListComponent } from './MC-23-ToDoList/TodoListComponent';
import { OTPMainSection } from './MC-3-OTP/OTPMainSection';
import { PaginationSection } from './MC-4-Pagination/PaginationSection';
import { TicTacToeSection } from './MC-5-TicTacToe/TicTacToeSection';
import { ForwardRefSection } from './MC-6-ForwardRef/ForwardRefSection';
import { UseLayoutHookSection } from './MC-7-useLayoutHook/UseLayoutHookSection';
import { ProgressBarSection } from './MC-8-ProgressBar/ProgressBarSection';
import { SearchAndSelectSection } from './MC-9-SearchAndSelect/SearchAndSelectSection';
import { ReduxMainSection } from './redux/ReduxMainSection';

function App() {
  return (
    <div>
      {/* <SeatBooking /> */}
      {/* <MainCommentSection /> */}
      {/* <OTPMainSection /> */}
      {/* <PaginationSection /> */}
      {/* <ReduxMainSection /> */}
      {/* <CustomHookSection /> */}
      {/* <TicTacToeSection size={4}/> */}
      {/* <LazyloadingSection /> */}
      {/* <ForwardRefSection /> */}
      {/* <UseLayoutHookSection /> */}
      {/* <ProgressBarSection /> */}
      {/* <SearchAndSelectSection /> */}
      {/* <FormValidationSection /> */}
      {/* <DebounceSection /> */}
      {/* <FolderStructureSection /> */}
      {/* <AxiosSection /> */}
      {/* <WorkoutTimerSection /> */}
      {/* <AccordianSection /> */}
      {/* <SearchBar /> */}
      {/* <InfiniteScroll /> */}
      {/* <ChessBoard dimension={8}/> */}
      {/* <ReactPureComponentsImplementation /> */}
      {/* <UseReducerHook /> */}
      {/* <ParentComponent /> */}
      {/* <ComponentWithModal /> */}
      <TodoListComponent />
    </div>
  );
}

export default App;
