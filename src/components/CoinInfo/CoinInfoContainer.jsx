import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert.jsx/Alert";
import CoinInfo from "./CoinInfo";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";

function CoinInfoContainer({ coinId }) {
  const {
    historicData,
    isLoading,
    isError,
    setDays,
    setCoinInterval,
    days,
    currency,
  } = useFetchCoinHistory(coinId);

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <Alert message="Error fetching data" type="error" />;
  }

  return (
    <>
      <CoinInfo
        historicData={historicData}
        setDays={setDays}
        setCoinInterval={setCoinInterval}
        days={days}
        currency={currency}
      />
    </>
  );
}

export default CoinInfoContainer;
