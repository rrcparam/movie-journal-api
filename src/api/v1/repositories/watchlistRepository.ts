import { WatchlistItem } from "../models/watchlistModel";

let watchlist: WatchlistItem[] = [];

export const getWatchlist = (): WatchlistItem[] => {
  return watchlist;
};

export const addToWatchlist = (item: WatchlistItem): WatchlistItem => {
  const newItem: WatchlistItem = {
    ...item,
    id: (watchlist.length + 1).toString(),
    addedAt: new Date().toISOString(),
  };
  watchlist.push(newItem);
  return newItem;
};

export const removeFromWatchlist = (id: string): void => {
  watchlist = watchlist.filter((item) => item.id !== id);
};
