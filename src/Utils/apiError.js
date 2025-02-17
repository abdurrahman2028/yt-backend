class apiError extends Error {
    constructor(
        statusCode,
        message = "someting is wrong!",
        error = [],
        stack = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
    }
}