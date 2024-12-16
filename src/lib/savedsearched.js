import { browser } from "$app/environment";
import { writable } from "svelte/store";

/* initialize the users to "" if the chat has not already been stored */
const savedSearched = browser ? window?.sessionStorage.getItem("recentlySearched") ?? "" : ""
export const search_store = writable(savedSearched)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        search_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.sessionStorage.setItem('recentlySearched', value);
        })
}