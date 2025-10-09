export const getInstalledApps = () => {
  try {
    const installedAppsStr = localStorage.getItem("applist");
    return installedAppsStr ? JSON.parse(installedAppsStr) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const addToLocalStorage = (id) => {
  try {
    const installedAppData = getInstalledApps();
    const appId = Number(id);

    if (installedAppData.includes(appId)) {
      return { success: false, message: "App already exists" };
    } else {
      installedAppData.push(appId);
      localStorage.setItem("applist", JSON.stringify(installedAppData));
      return { success: true, message: "Installed successfully" };
    }
  } catch (err) {
    console.log(err);
    return { success: false, message: "Error saving to localStorage" };
  }
};
