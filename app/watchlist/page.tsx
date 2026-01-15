import WatchlistClient from "./WatchlistClient";
import { watchlist } from "./_data/watchlist";

export default function WatchlistPage() {
  return <WatchlistClient data={watchlist} />;
}
