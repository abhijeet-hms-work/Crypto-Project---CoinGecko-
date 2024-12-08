import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page = 1, currency) {
  const perpage = 20;
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perpage}&page=${page}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}