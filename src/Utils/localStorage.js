export const loadInstalledApps = () => {
    try {
        const data = localStorage.getItem("applist");
        return data? JSON.parse(data) : [];
    }
    catch(err) {
        console.log(err);
        return [];
    }
}

export const loadInstalledApps = () => {
    
}