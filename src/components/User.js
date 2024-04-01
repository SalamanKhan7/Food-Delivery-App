import { useEffect } from "react";

function User(props) {
  const { name, location } = props;
  useEffect(() => {
    const timer = setInterval(() => console.log("use effect call"), 1000);
    return () => {
      clearInterval(timer);
      console.log("return called");
    };
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <h3>{location}</h3>
    </div>
  );
}

export default User;
