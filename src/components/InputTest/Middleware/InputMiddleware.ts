import axios from "axios";
import { setInputAction } from "../Actions/InputActions";

/**
 * @function This function invoked to store data of quote detail from API and dispatch data action to store data in redux.
 * @param bodyParams This parameter contain body params Like { quoteDetailsId: string, status: number }
 * @param quoteId  This parameter hold quoteId in string type.
 * @param containerProps This parameter conatin conatiner property item.
 */
export const addInPutValue = (inputText:string) => {
    return (dispatch: Function) => {
       
            console.log("inputTextCalled",inputText);
            
            // dispatch(setInputAction(inputText));
            // containerProps.onApiResponse(reposnse, false, API_SERVICE_KEY.SAVE_APPROVAL_REJECT_RESPONSE)
       
    }
};

// const callForPostQuoteApproivalReject: Function = (bodyParams: QuoteResponseAprrovalReject, quoteId: string, containerProps: CustomerQuotesContainerProps): Promise<QuoteDetailResponse> => {
//     const promise: Promise<QuoteDetailResponse> = new Promise((resolve, reject) => {
//         let getQuoteUrl: string = `${containerProps.apiBaseUrl}/quotes/${quoteId}/approval`;
//         console.log(getQuoteUrl);
        
//         axios.put(getQuoteUrl, bodyParams).then((response: any) => {
//             resolve(response);
//         }).catch((error: any) => {
//             containerProps.onApiResponse(error, true, API_SERVICE_KEY.SAVE_APPROVAL_REJECT_RESPONSE);   
//             reject(error);
//         })
//     })
//     return promise;
// }