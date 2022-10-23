function ComponentsLogin(props) {
    
    return <div className="login">
    <h1>Login jean</h1>
    <form>
        <label for="usuario">Nombre Ususario</label>
        <input type="text" placeholder="Enter Usuario"></input>

        <label for="contraseña">Contraseña</label>
        <input type="text" placeholder="Enter contraseña"></input>

        
        <input type="submit"></input>
    </form>
    </div>
   
 }
 export default ComponentsLogin;