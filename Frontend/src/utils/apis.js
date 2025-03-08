const URL = "https://localhost:8082";

const useregister = async (username, password) => {
  const response = await fetch(`${URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  });

  const resJson = await response.json();
  localStorage.setItem("token", resJson.token);
  return resJson;
};
export { useregister };
