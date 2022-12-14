import "./styles.css";

import Button from "./componenets/Button"

import Avatar from "./componenets/Avatar"

const users=[
  {
    id:"1",
src:"https://avatars.githubusercontent.com/u/105913922?v=4",
name:"suraj kumar",
rounded:false
},

{

  id:"2",
  src:"https://avatars.githubusercontent.com/u/105913922?v=4",
  name:"suraj kumar",
  rounded:true
  },


  {
    id:"3",
    src:"https://avatars.githubusercontent.com/u/105913922?v=4",
    name:"suraj kumar",
    rounded:true
    },

    {
      id:"4",
      src:"https://avatars.githubusercontent.com/u/105913922?v=4",
      name:"suraj kumar",
      rounded:false
      },

      
      {

        id:"5",
        src:"https://avatars.githubusercontent.com/u/105913922?v=4",
        name:"suraj kumar",
        rounded:false
        }
   
]


const picMap=users.map((el)=>(
  <Avatar
  key={el.id}
  src={el.src}
  name={el.name}
  rounded={el.rounded}
  
  />
))


 function App() {
  return (
    <div className="App">
      <h1>Hello RCT-101</h1>

    

      <Button  text="Button1"  onClick={()=>alert("1")}/>
      <Button  text="Button2"  onClick={()=>alert("2")}/>
      { picMap}
     
    </div>
  );
}

export default App;
