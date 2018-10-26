export const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        var error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
    }
};

export const handleResponseError = (error) => {
    throw new Error(error.message);
};