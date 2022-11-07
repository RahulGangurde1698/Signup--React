import classes from "./Header.module.css";
import { Link} from "react-router-dom";
import React from "react";


const Header = () =>{
    return(
        
      <div>
      <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/Login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
        {/* console.log("hello") */}
        </div>
    
    
    );
};
export default Header;