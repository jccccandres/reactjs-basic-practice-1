import { SET_BUDGET_TRACKER } from "../types";

export function setBudgetTracker(payload) {
    return {
        type: SET_BUDGET_TRACKER,
        payload
    };
}