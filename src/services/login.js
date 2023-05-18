const API = "http://localhost:5000";

export default function login({ correo, contrasena }) {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, contrasena }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is not ok");
      return res.json();
    })
    .then((res) => {
      const { jwt } = res.access_token;
      console.log("res es: ", res);
      return jwt;
    });
}
