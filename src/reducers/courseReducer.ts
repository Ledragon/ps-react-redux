export default function courseReducer(state: any = [], action: any): any {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}