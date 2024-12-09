import { useParams } from "react-router-dom";

function CounDetailsPage() {
  const { coinId } = useParams();
  return (
    <>
      <div>
        <h1>Coin details page {coinId}</h1>
      </div>
    </>
  );
}
export default CounDetailsPage;
