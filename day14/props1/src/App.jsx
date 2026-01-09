// import { Props } from "./Components/Props"

import { ChildrenProps } from "./Components/childrenpropes"


function App() {
  

  return (
    <>
      {/* <Props name="Bunty" age="23"></Props> */}
      <ChildrenProps>
        <h1>am a children prop , passed from children  components</h1>
        <h2>Hello Everyone</h2>
      </ChildrenProps>

      <ChildrenProps>
        <h1>am a children prop , passed from children  components</h1>
        <h2>Hello Everyone</h2>
      </ChildrenProps>

    </>
  )
}

export default App
