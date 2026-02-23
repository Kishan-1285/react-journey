import PropTypes from 'prop-types' 


function UserGreeting(props){
    
    const Logged = <h2 className="username">Welcome {props.UserName}</h2>;
    const NotWelcome = <h2 className="Fail">You are not welcome {props.UserName}</h2>;
    return(props.isLogged ? Logged : NotWelcome);
         



    //   if(props.isLogged){
    //      return <h2 className="username">Welcome {props.UserName}</h2>
    //  }
    //  else{
    //      return <h2>You are not welcome,Fuck off da Gokul !</h2>
    //  }
   

}

UserGreeting.propTypes = {
    isLogged : PropTypes.bool,
    UserName : PropTypes.string,
} 

// UserGreeting.defaultProps={
//     isLogged : false,
//     UserName : "guest",

// }

export default UserGreeting
