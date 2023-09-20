import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
  return (
    <>
      <h1>সঠিক উত্তরে টিক চিহ্ন দেউ , হাড়ি </h1>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
