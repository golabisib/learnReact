import { useState } from "react"


function Form() {
    //email function:
    const [email, setEmail] = useState("")
    const emailHandler = (event) =>{
        setEmail(event.target.value)
    }
    //password function
    const [password, setPassword] = useState("")
    const passwordHandler = (event) =>{
        setPassword(event.target.value)
    }
    // select function
    const [role, setRole] = useState("user")
    const selectHandler = (event) =>{
        setRole(event.target.value);
    }
    //radio function
    const [gender, setGender] = useState("male")
    const genderHandler = (event) =>{
        setGender(event.target.value)
    }
    //checkbox function
    const [rules, setRules] = useState("true");
    const rulesHandler = () =>{
        setRules((rules) => !rules);
    }
    // login function
    const loginHandler = () =>{
        console.log({email, password, role, gender, rules})
    }
    return (
        <>
        <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={emailHandler}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
        />
        <select value={role} onChange={selectHandler}>
            <option value="user">user</option>
            <option value="admin">admin</option>
            <option value="value">writer</option>
        </select>
        <div>
            <label htmlFor="male">Male</label>
            <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={genderHandler}
                checked={true}
            />{ /*for select one of radios we named the group of options the same name */}
            <label htmlFor="female">Female</label>
            <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={genderHandler}
            />
            <label htmlFor="other">Other</label>
            <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={genderHandler}
            />
        </div>
        <label htmlFor="rules">lore</label>
        <input
            type="checkbox"
            id="rules"
            onChange={rulesHandler}
            checked = {rules}/>
        <button onClick={loginHandler}>login</button>
        </>
        )
}

export default Form
