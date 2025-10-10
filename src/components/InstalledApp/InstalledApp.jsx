import { toast } from "react-toastify";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { removeFromLocalStorage } from "../../Utils/addToLocalStorage";

const InstalledApp = ({ appData, onUninstall }) => {
  const { image, title, ratingAvg, size, downloads, id } = appData;

  const handleUninstall = (id) => {
    const result = removeFromLocalStorage(id);
    if (!result.success) {
      toast.error(result.message);
      return;
    } else {
      onUninstall(id);
      toast.error(`${title} has been uninstalled successfully`);
    }
  };

  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row justify-between items-center shadow-lg mt-5 mx-18 md:mx-0">
      <div className="left flex flex-col md:flex-row items-center gap-2">
        <img
          src={image}
          alt="app icon"
          className="w-30 h-30 object-cover rounded-3xl p-3"
        />
        <div className="flex flex-col items-center md:items-start px-1">
          <p className="inter-font font-medium text-[20px] text-[#001931]">
            {title}
          </p>
          <div className="flex items-center flex-wrap justify-center gap-4 px-1">
            <div className="flex items-center gap-1">
              <img
                src={downloadIcon}
                alt="downloadIcon"
                className="w-4 -mt-1"
              />
              <p className="inter-font font-medium text-[16px] text-[#00D390]">
                {downloads}M
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img src={ratingIcon} alt="downloadIcon" className="w-4 -mt-1" />
              <p className="inter-font font-medium text-[16px] text-[#FF8811]">
                {ratingAvg}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="inter-font font-medium text-[16px] text-[#627382]">
                {size} MB
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <button
          onClick={() => handleUninstall(id)}
          className="btn md:mr-5 my-4 bg-[#00D390] text-white inter-font font-semibold text-[16px]"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApp;
