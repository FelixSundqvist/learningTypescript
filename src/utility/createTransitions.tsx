
interface Transition{
    transitionElement: string,
    transitionTime: number,
    transitionType: string
}
const createTransition = ( transitionItems: Array<Transition> ) => transitionItems.map((item, index) => 
        `${item.transitionElement} ${item.transitionTime}ms ${item.transitionType} ${(index + 1 )< transitionItems.length ? "," : ""} `)
        .join("");

export default createTransition;