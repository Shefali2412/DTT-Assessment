// Central Pinia store for house listings

import { defineStore } from "pinia";
import * as api from "@/services/api";

export const useHouseStore = defineStore("houses", {
  state: () => ({
    /** current list fetched from API */
    list: [],

    /** network indicator for overview screens */
    loading: false,

    /** last API error (null = ok) */
    error: null,
  }),

  getters: {
    /** house by numeric id */
    byId: (state) => (id) => state.list.find((h) => h.id === +id),

    /** UI helper: true when list is empty and no fetch pending */
    isEmpty: (state) => !state.loading && state.list.length === 0,
  },

  actions: {
    /** one-shot fetch, cached for session */
    async fetchAll() {
      if (this.list.length) return;
      this.loading = true;
      try {
        this.list = await api.getHouses();
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },

    /** POST new house, push to local state, return id */
    async add(payload) {
      const created = await api.createHouse(payload);
      this.list.push(created);
      return created.id;
    },

    /** PUT update, replace local copy */
    async edit(id, payload) {
      const updated = await api.updateHouse(id, payload);
      const i = this.list.findIndex((h) => h.id === id);
      if (i > -1) this.list[i] = updated;
    },

    /** DELETE house, prune local list */
    async remove(id) {
      await api.deleteHouse(id);
      this.list = this.list.filter((h) => h.id !== id);
    },
  },
});
