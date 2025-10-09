import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";


const InstalledApp = ({appData}) => {
    // const sortedData = [...appData].sort((a, b) => b.downloads - a.downloads);
    const {image, title, ratingAvg, size, downloads} = appData;

  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row justify-between items-center shadow-lg mt-5 mx-18 md:mx-0">
        <div className="left flex flex-col md:flex-row items-center gap-2">
            <img src={image} alt="app icon" className="w-30 h-30 object-cover rounded-3xl p-3" />
            <div className="flex flex-col items-center md:items-start">
                <p className="inter-font font-medium text-[20px] text-[#001931]">{title}</p>
                <div className="flex items-center flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-1">
                        <img src={downloadIcon} alt="downloadIcon" className="w-4 -mt-1" />
                        <p className="inter-font font-medium text-[16px] text-[#00D390]">{downloads}M</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={ratingIcon} alt="downloadIcon" className="w-4 -mt-1" />
                        <p className="inter-font font-medium text-[16px] text-[#FF8811]">{ratingAvg}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="inter-font font-medium text-[16px] text-[#627382]">{size} MB</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <button className="btn md:mr-5 my-4 bg-[#00D390] text-white inter-font font-semibold text-[16px]">Uninstall</button>
        </div>
    </div>
  );
};

export default InstalledApp;
