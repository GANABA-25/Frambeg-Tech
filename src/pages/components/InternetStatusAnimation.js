import Lottie from "lottie-react";
import OfflineAnimation from "../../lottie/Animation - offline.json";

const InternetStatusAnimation = () => {
  return (
    <div className="w-[30rem] h-[30rem]">
      <Lottie
        animationData={OfflineAnimation}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default InternetStatusAnimation;
