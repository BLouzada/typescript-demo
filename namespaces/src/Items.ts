namespace items {
    export interface IItem {
        id: number,
        title: string
    };
    export function print(item: IItem) {
        console.log(item.id + " > " + item.title);
    }
}