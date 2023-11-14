import Loading from "../Loading.json";
import Lottie from "lottie-react";
const loaderContainerStyles = {
  width: "50%",
  height: "20vh", // Set the desired fixed height
  display: "flex",
  flexDirection: "column", // To stack content vertically
  justifyContent: "center",
  alignItems: "center",
  margin: "auto", // Center both horizontally and vertically
  paddingBottom: "70vh",
  paddingTop: "20vh",
};
export const Loader = () => {
  return (
    <div style={loaderContainerStyles}>
      <Lottie loop autoplay speed="1" background="transparent" animationData={Loading} />
    </div>
  );
};
