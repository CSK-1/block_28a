import SignUpLogIn from "./SignUpLogIn"

function LogIn ({setToken}) {
 return(
        <>
        <SignUpLogIn setToken={setToken} endpoint={"login"}/>
        </>
    )
}

export default LogIn