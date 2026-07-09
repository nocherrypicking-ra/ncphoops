import WatchlistClient from "./WatchlistClient";
import { players } from "./_data/watchlist";

export default function WatchlistPage() {
  return <WatchlistClient data={players} />;
}
