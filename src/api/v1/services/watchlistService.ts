import { WatchlistItem } from "../models/watchlistModel";
import * as watchlistRepository from "../repositories/watchlistRepository";

export const getWatchlist = (): WatchlistItem[] => {
  return watchlistRepository.getWatchlist();
};

export const addToWatchlist = (item: WatchlistItem): WatchlistItem => {
  return watchlistRepository.addToWatchlist(item);
};

export const removeFromWatchlist = (id: string): void => {
  watchlistRepository.removeFromWatchlist(id);
};
