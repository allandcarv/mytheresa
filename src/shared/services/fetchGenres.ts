import { API_URL } from "../../constants";

export async function fetchGenres() {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error on fetching genres");
  }

  const jsonData = await res.json();

  return jsonData;
}
