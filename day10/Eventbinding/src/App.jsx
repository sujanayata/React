// import CounterApp from "./components/CounterApp"
// import { EventBinding2 } from "./components/Eventbinding"

import { ChildProps } from "./components/childrenprops"

// import { ChildProps } from "./components/childrenprops"

// import { Demo } from "./components/Eventbinding1"

// import { Props } from "./props/props"


function App() {
  const student=["96","supraja","kadpa","maggie"]
 
  return (
    <>
    {/* <ChildProps name="sundar" age={99} place="chennai" salary="2000" skills={["HTML", "CSS", "JS", "ReactJs", "python", "PDBC", "Django"]}></ChildProps>
    <ChildProps name="sundar" age={99} place="chennai" salary="2000"><div><h1>children props</h1></div></ChildProps> */}

     {/* <EventBinding2></EventBinding2> */}
     {/* <CounterApp></CounterApp> */}
     {/* <Props eid="101" ename="sundra" esalary={25000} edepartment="React Developer" eemail="sudra@gmail.com" eate={false} eskills={["HTML,CSS,JS,REACTJS"]}/>
     <Props eid="102" ename="shannu" esalary={55000} edepartment="python Developer" eemail="shannu@gmail.com" eate={true} eskills={["HTML,CSS,JS,REACTJS,python"]}/>
     <Props eid="103" ename="sricharan" esalary={55000} edepartment="fullstack Developer" eemail="sri@gmail.com" eate={true} eskills={["HTML,CSS,JS,REACTJS"]} /> */}
   
   <ChildProps student={student}></ChildProps>

    </>
  )
}

export default App
