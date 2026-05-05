import PropTypes from "prop-types";
function Student(props){
    return(
        <>
          <div className="Box">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Gender:{props.gender}</p>
          </div>
        </>
    );

   
}
 Student.defaultProps={
        name:"Guest",
        age:20,
        gender:"Unknown",
    }

export default Student