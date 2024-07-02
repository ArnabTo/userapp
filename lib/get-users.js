export async function getUserData() {
    try {
        const res = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users ', { cache: 'no-store' })
        const data = await res.json();
        return data;
    } catch (err) {
        return { error: 'Failed to fetch user data.' };
    }
} 
