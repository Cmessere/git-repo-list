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

export const cleanSearchValue = (string:string):string => {
    const cleanedValueArray = string.replace( /\s\s+/g, ' ' ).split(' '); //The replace flattens multiple spaces
    const cleanedValues = cleanedValueArray.slice(0, 2).join("/"); //Ignoring inputs after second string
    
    return cleanedValues
}

export const checkInput = (string:string):boolean => {
    const supportArray = string.split(' ')

    return (string.includes(' ') || string.includes('/')) && (supportArray.length > 1 && supportArray[1].length > 0)
}