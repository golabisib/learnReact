// conditional rendering
// if else:
// function Header (){
//     const isLogIn = true;
//     //if (isLogin == true)
//     if (isLogIn){
//         return(
//             <header>
//                 <button>Dashboard</button>
//             </header>
//         )
//     }else{
//         return(
//             <header>
//                 <button>LogIn</button>
//             </header>
//         )
//     }
// }
// ternary operator:
// function Header (){
//     const isLogIn = true;
//     return(
//         <header>
//             {isLogIn ? (
//                 <><button>Dashboard</button>
//             <button>Basket</button>
//             </>
//             )
//             :
//             (<button>LogIn</button>)}
//             </header>
//             )
// }
// AndAnd &&:
function Header (){
    const isLogIn = false;
    return(
        <header>
            {isLogIn ? (<button>Dashboard</button>)
                :
                (<button>LogIn</button>)}
                {isLogIn && <button>Basket</button>}
            </header>

                )

}
export default Header
