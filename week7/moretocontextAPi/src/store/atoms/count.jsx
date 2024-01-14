import { atom, selector } from "recoil";
export const countAtom = atom({
    key: "countAtom",
    default: 0
});


//Just like useMemo have dependecy array, in this case when countAtom changes, rerender evenSelector
export const evenSelector= selector({
    key : "evenSelector",
    get: ({get}) => {
        const count = get(countAtom); // when countAtom changes
        return count % 2;
    }
})