import PropTypes from "prop-types";
import { Lumiflex } from "uvcanvas";
import DashboardCover from "../svg/DashboardCover.svg";

function BannerDashboard({ user }) {
  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-90 backdrop-filter backdrop-blur-sm"></div>
        <Lumiflex />
      </div>

      <div className="container relative z-20 flex flex-col items-center justify-center px-6 py-16 mx-auto lg:flex-row-reverse lg:space-x-0">
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full lg:w-1/2 lg:items-start lg:text-left">
          <h1 className="flex flex-col text-5xl font-black leading-none text-purple-600 uppercase kanit-black sm:text-6xl md:text-7xl lg:text-6xl">
            Bienvenido {user.displayName}
          </h1>
        </div>
        <div className="relative hidden lg:block w-full lg:w-1/2">
          <img
            src={DashboardCover}
            className="max-w-full h-auto m-auto pr-6 lg:max-w-lg"
            alt="Banner cover"
          />
        </div>
      </div>
    </div>
  );
}

BannerDashboard.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
  }),
};

export default BannerDashboard;
