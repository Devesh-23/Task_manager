const asyncWrapper = (fn) =>{
    return async (req, res, next) => {
        try {
            await fn(rer, res, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper

//here next is the next function that has to be executed but her ei haven't defined 
//any so not being used but can be used likewise 