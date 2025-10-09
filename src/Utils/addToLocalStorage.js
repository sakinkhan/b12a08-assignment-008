// get
export const getInstalledApps = () => {
  try {
    const installedAppsStr = localStorage.getItem("applist");
    return installedAppsStr ? JSON.parse(installedAppsStr) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

//save
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

// Uninstall/remove apps
export const removeFromLocalStorage = (id) => {
  const installedAppList = getInstalledApps();
  try {
    const updatedInstalledAppList = installedAppList.filter(appId => Number(appId) !== Number(id));
    localStorage.setItem('applist', JSON.stringify(updatedInstalledAppList));
    console.log(updatedInstalledAppList);
    return { success: true, message: "App uninstalled successfully" };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Error uninstalling app" };
  }
}
