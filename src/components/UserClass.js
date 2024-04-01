// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     console.log(this.props.name + "constructor");
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => console.log("use effect call"), 1000);

//     console.log(this.props.name + "component mount");
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log(this.props.name + "component unmount");
//   }
//   render() {
//     const { name, location } = this.props;
//     const { count } = this.state;
//     console.log(this.props.name + "render");
//     return (
//       <div>
//         <h1>Count:{count}</h1>
//         <button
//           onClick={() =>
//             this.setState({
//               count: this.state.count + 1,
//             })
//           }
//         >
//           Increment
//         </button>

//         <h1>{name}</h1>
//         <h3>{location}</h3>
//       </div>
//     );
//   }
// }

// export default UserClass;
