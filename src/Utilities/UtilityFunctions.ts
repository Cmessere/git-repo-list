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