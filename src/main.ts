/**
 * closestToZero find the closest number to 0 in a given integer array
 * I used a for loop instead of a sort in an attempt to reduce the algorithm complexity 
 * @param source integer array
 */
export function closestToZero(arr: number[] | undefined) : number {
    
    if(!arr || !arr.length) return 0;
    
    let maxDiff = Number.MAX_VALUE;
    let closestValue = 0;
    
    for(const value of arr){
        const abs = Math.abs(value);
        if(abs<maxDiff){
            maxDiff = abs;
            closestValue = value;
        }else if(abs==maxDiff && value>0){
            closestValue = value;
        }
    }

    return closestValue;
}
