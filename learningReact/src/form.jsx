import { useState } from "react"


function Form() {
    // //email function:
    // const [email, setEmail] = useState("")
    // const emailHandler = (event) =>{
    //     setEmail(event.target.value)
    // }
    // //password function
    // const [password, setPassword] = useState("")
    // const passwordHandler = (event) =>{
    //     setPassword(event.target.value)
    // }
    // // select function
    // const [role, setRole] = useState("user")
    // const selectHandler = (event) =>{
    //     setRole(event.target.value);
    // }
    // //radio function
    // const [gender, setGender] = useState("male")
    // const genderHandler = (event) =>{
    //     setGender(event.target.value)
    // }
    // //checkbox function
    // const [rules, setRules] = useState("true");
    // const rulesHandler = () =>{
    //     setRules((rules) => !rules);
    // }
    // login function
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log({form})
    }
    // summery of up
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "user",
        gender:"male",
        rules: false,
    });
    const changeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        if (name === "rules"){
            setForm((form) => ({...form, rules: !form.rules}));

        }else{
            setForm((form) => ({...form, [name]: value }))
        }
    }
    return (
        <>
        <form onSubmit={submitHandler}> {/*submit in this case causes the submit is also included applied when the enter key is press and when the submit or login button is clicked */}
        <input
            type="text"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={changeHandler}
        />
        <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={changeHandler}
        />
        <select value={form.role} name="role" onChange={changeHandler}>
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
                onChange={changeHandler}
                checked = {form.gender === "male"}
            />{ /*for select one of radios we named the group of options the same name */}
            <label htmlFor="female">Female</label>
            <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked = {form.gender === "female"}
                onChange={changeHandler}
            />
            <label htmlFor="other">Other</label>
            <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked = {form.gender === "other"}
                onChange={changeHandler}
            />
        </div>
        <label htmlFor="rules">lore</label>
        <input
            type="checkbox"
            name="rules"
            id="rules"
            onChange={changeHandler}
            checked = {form.rules}/>
        <button type="submit">login</button>
        </form>
        </>
        )
}

export default Form
