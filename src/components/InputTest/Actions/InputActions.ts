
export const INPUT_SETDATA: string = 'INPUT_SETDATA';
export const INPUT_GETDATA: string = 'INPU_GETDATA';

export const setInputAction = (inputDataItem: string): any => {
    return {
        type: INPUT_SETDATA,
        payload: inputDataItem
    }
}
export const getInputAction = (inputDataItem: string): any => {
    return {
        type: INPUT_GETDATA,
        payload: inputDataItem
    }
}
