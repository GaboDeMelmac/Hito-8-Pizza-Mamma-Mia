import { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const CardContext = createContext();

const CounterProvider = ({ children }) => {
  const [pizzasCarrito, setPizzasCarrito] = useState([]);
  const [info, setInfo] = useState([]);
  const [infopizza, setInfoPizza] = useState({ ingredients: [] });
  const [pizzas, setPizzas] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null); // Persistir el token
  const [email, setEmail] = useState(localStorage.getItem("email") || ""); // Persistir el email
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState(null); // Agregar el estado para el usuario
  const [loadingProfile, setLoadingProfile] = useState(true); // Para saber si los datos del usuario están siendo cargados

  const calcularTotal = pizzasCarrito.reduce((total, pizza) => {
    return total + pizza.price * pizza.count;
  }, 0);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        if (!res.ok) {
          throw new Error("Error al fetch las pizzas");
        }
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  // Función login
  const login = (email, token) => {
    setEmail(email);
    setToken(token);
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
  };

  // Función logout
  const logout = () => {
    setEmail("");
    setToken(null);
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  };

  // Función para obtener el perfil del usuario
  const getProfile = async () => {
    if (!token) return;
    setLoadingProfile(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUsuario(data); // Establecer los datos del usuario
      } else {
        console.error("Error al obtener los datos del usuario");
        setUsuario(null); // Asegúrate de poner el usuario a null si la respuesta es mala
      }
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      setUsuario(null); // Manejar error y limpiar el estado del usuario
    } finally {
      setLoadingProfile(false); // Detener el loading
    }
  };

  useEffect(() => {
    getProfile(); // Llamar la función para obtener el perfil si ya hay token
  }, [token]); // Solo se llama cuando el token cambia

  return (
    <CardContext.Provider
      value={{
        pizzasCarrito,
        setPizzasCarrito,
        calcularTotal,
        info,
        setInfo,
        infopizza,
        setInfoPizza,
        pizzas,
        setPizzas,
        token,
        setToken,
        email,
        setEmail,
        password,
        setPassword,
        usuario, // Proveer el perfil del usuario al contexto
        loadingProfile, // Proveer el estado de carga al contexto
        login,
        logout,
        getProfile, // Proveer la función para obtener el perfil
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CounterProvider;
