import Lottie from "lottie-react";
import hi_animation from "../../assets/lottienaimations/hi_animation.json";

const Hi_anime = () => {
  return (
    <>
      <Lottie animationData={hi_animation} loop={false} />;
    </>
  );
};

export default Hi_anime;
