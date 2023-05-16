const HomeViewModel = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log("API:", API);
    //console.log(process.env.REACT_APP_API);
    const res = await fetch(`${API}/sitios`, {
      method: "POST",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    console.log("data: ", data);
  };

  return {};
};
