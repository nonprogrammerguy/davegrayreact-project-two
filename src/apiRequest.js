const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        console.log(response);
        if (!response.ok) {
            throw Error('Something went wrong.');
        }
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
}

export default apiRequest;