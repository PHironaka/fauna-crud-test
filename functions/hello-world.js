exports.handler = async(event, context, callback) => {
    return {
        statusCode:200,
        body: {msg: 'Hello World'}
    }
}