const api_url = "http://localhost:8000/api/v1/users";

export async function fetchAllUsers(){
    const res = await fetch(api_url);
    if(!res.ok)throw new Error("Failed to load all the users");
    return res.json();
}