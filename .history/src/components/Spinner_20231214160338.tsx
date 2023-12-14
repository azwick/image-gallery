import { LoadingIcon } from "./SVGs";
import "../styles/spinner.scss"
const Spinner = (): React.ReactElement => {

  return (
    <div className="spinner">
      <LoadingIcon />
    </div>
  );
};

export default Spinner;
