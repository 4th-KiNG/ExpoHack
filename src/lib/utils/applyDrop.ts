import { DropResult } from "react-smooth-dnd";
import { ILead } from "../../shared/types/LeadTypes";
import { toJS } from "mobx";

export const applyDrag = (arr: ILead[], dragResult: DropResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = toJS(payload);
    if (removedIndex !== null) {
        itemToAdd = toJS(result.splice(removedIndex, 1)[0]);
    }

    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
};