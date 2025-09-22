import type { Film } from "@/types";
const URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_READ_ACCESS_TOKEN;
const CATEGORY = "popular";
const URL_CATEGORY = `${URL}/${CATEGORY}`;

const options = {
  method: "GET",
  headers: {
    "User-Agent": "insomnia/11.6.0",
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const getFilmsData = async () => {
  try {
    const response = await fetch(URL_CATEGORY, options);
    if (!response.ok) {
      throw new Error(`Error while fetching films data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch films data:", error);
    throw error;
  }
};
