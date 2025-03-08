const URL = "http://localhost:8082";

const useregister = async (username, email, number, password) => {
  try {
    const response = await fetch(`${URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        number: number,
        password: password,
      }),
    });
    const resJson = await response.json();
    if (!response.ok) {
      return { message: "User already exist" };
    }
    localStorage.setItem("token", resJson.token);
    return resJson;
  } catch (error) {
    console.error("API Error:", error);
    return { error: true, message: error.message };
  }
};
export { useregister };
