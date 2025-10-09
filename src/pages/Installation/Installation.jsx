import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import InstalledApp from "../../components/InstalledApp/InstalledApp";
import { getInstalledApps } from "../../Utils/addToLocalStorage";


const Installation = () => {
  const data = useLoaderData();

  const [installedList, setInstalledList] = useState([]);
  const [sort, setSort] = useState("");
  
  useEffect(() => {
    const storedAppData = getInstalledApps();
    const convertedStoredAppData = storedAppData.map((id) => parseInt(id));
    const installedAppList = data.filter((app) =>
      convertedStoredAppData.includes(app.id)
    );
    setInstalledList(installedAppList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "High-Low") {
      const sortedByHighToLow = [...installedList].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalledList(sortedByHighToLow);
    }
    if (sortType === "Low-High") {
      const sortedByLowToHigh = [...installedList].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalledList(sortedByLowToHigh);
    }
  };

  const handleUninstall = (id) => {
    const updatedAppList = installedList.filter((app)=> app.id !== id);
    setInstalledList(updatedAppList);
  }

  return (
    <div className="py-20 px-5 lg:px-20 bg-[#d2d2d2]/20">
      <div>
        <h1 className="inter-font font-bold text-[32px] md:text-[48px] text-[#001931] text-center">
          Your Installed Apps
        </h1>
        <p className="inter-font text-[16px] md:text-[20px] text-[#001931] text-center mb-10">
          Explore All Apps on the Market developed by us. Here are the list of
          apps you installed
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="inter-font font-semibold text-[18px] md:text-[24px] text-[#001931]">
            ({installedList.length}) Apps Found
          </p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 inter-font text-[16px] text-[#627382] "
            >
              {sort
                ? `Sort By Download Count: ${sort}`
                : `Sort By Download Count`}{" "}
              {!sort && "⬇️"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("High-Low")}>High-Low</a>
              </li>
              <li>
                <a onClick={() => handleSort("Low-High")}>Low-High</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {installedList.length > 0 ? (
          installedList.map((appData) => (
            <InstalledApp
              key={appData.id}
              appData={appData}
              onUninstall = {handleUninstall}
            ></InstalledApp>
          ))
        ) : (
          <p className="inter-font font-extrabold text-5xl text-center text-[#001931]/60 py-20">
            No installed apps found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Installation;
