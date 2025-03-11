const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const updateProfile = async (data) => {
    const response = await fetch(`${API_BASE_URL}/updateProfile`, {
        method: 'POST',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers: data instanceof FormData ? {} : { 'Content-Type': 'application/json' },
    });

    return response.json();
};

export const getProfile = async () => {
    const response = await fetch(`${API_BASE_URL}/profile`);
    return response.json();
};
