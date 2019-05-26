function checkContains<T>(item: T): boolean {
    if(item && item !== undefined) {
        return true
    }else{
        return false
    }
    
}

export default checkContains;