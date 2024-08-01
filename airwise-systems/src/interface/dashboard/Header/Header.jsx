import PropTypes from "prop-types";
import { MdWavingHand } from "react-icons/md";

function Header({ user }) {
  return (
    <div className="mx-auto max-w-lg pt-6 text-center bg-stone-950">
      <div className="flex items-center">
        <h2 className="text-lg font-bold sm:text-4xl text-purple-600 kanit-black">
          ¡Bienvenido, {user.displayName}!
        </h2>
        <MdWavingHand
          className="
       text-purple-600 pl-3 w-11 h-11"
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
  }),
};

export default Header;
