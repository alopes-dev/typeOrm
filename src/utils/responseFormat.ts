interface Isuccess{
    status?:number,
    data?:Object | Array<object>,
    message:string
}

/**
 * 
 * @param param0 
 */
export function success({status = 200, data = [],message}: Isuccess){
    return {
        data,
        status,
        message
    }
}