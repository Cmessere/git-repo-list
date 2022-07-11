export const capitalizeString = (sentence:string):string => {
    return sentence[0].toUpperCase() + sentence.slice(1)  
}

export const createRandomIndexes = (usersPerPage:number):number[] =>{
    let randomIndexes:number[] = [], remainingIndexes = usersPerPage

    while(remainingIndexes > 0){
        let currentIndex = Math.floor(Math.random() * 100); 

        if(!randomIndexes.includes(currentIndex)){
            randomIndexes.push(currentIndex)
            remainingIndexes = remainingIndexes - 1
        }
    }   

    return randomIndexes
}

export const getRandomItems = (array:any[], usersPerPage:number) => {
    let randomIndexes = createRandomIndexes(usersPerPage)
    let randomizedArray:any[] = []

    randomIndexes.forEach(x => {
        randomizedArray.push(array[x])
    })    

    return randomizedArray
}

export const cleanSearchValue = (searchValue:string):string => {
    const cleanedValueArray = cleanInputFromSymbols(searchValue)
    const cleanedValues = cleanedValueArray.slice(0, 2).join("/"); //Ignoring inputs after second string
    return cleanedValues
}

export const checkInput = (input:string):boolean => {
    const supportArray = cleanInputFromSymbols(input); 

    return (supportArray.length >= 2 && supportArray[1].length > 0)
}

export const cleanInputFromSymbols = (string:string):string[] => {
    const tempArray = string.trim().replace( /\s\s+/g, ' ' ).replace(/\//g, ' ').split(' ') //The replace flattens multiple spaces
    return tempArray.filter(item => item); 
}