const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            infoPersona: {},
            favoritos: [],
            auth: false
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false
                })
            },
            login: (userEmail, userPassword) => {
                fetch('https://3000-melissaocam-authenticat-3gkcdc6vcve.ws-us84.gitpod.io/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad email or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },
            obtenerInfoPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results
                    }))
                    .catch(err => console.error(err))
            },

            infoDePersonaje: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        infoPersona: data.result
                    }))
                    .catch(err => console.error(err))
            },
            agregarFavoritos: (name) => {
                const store = getStore();
                setStore({
                    favoritos: [...store.favoritos, name]
                });

                console.log(store.favoritos);

                console.log(name);

            },
            eliminarFavoritos: (id) => {
                const store = getStore();
                setStore({
                    favoritos: store.favoritos.filter((item) => item != id)
                });
            }
        }
    }
}


export default getState;