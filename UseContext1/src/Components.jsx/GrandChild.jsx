import { useContext } from "react";
import { domainContext } from "../domainContext";

const GrandChild=()=> {
    const domain = useContext(domainContext);
    
  return (
    
    <><h1>My domain is {domain}</h1></>
  )
}

export default GrandChild
