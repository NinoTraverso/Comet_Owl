const BASE_URL =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json";

export const fetchExoplanetsData = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch exoplanets data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching exoplanets data:", error);
    return [];
  }
};

/*
--------------------------------- OLD CODE --------------------------
const BASE_URL =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json";

export const fetchExoplanetsData = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch exoplanets data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching exoplanets data:", error);
    return [];
  }
};


*/
