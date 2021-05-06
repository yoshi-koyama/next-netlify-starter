import { useState } from 'react'

const NameForm = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  })
  return (
    <>
      <p>私のフルネームは {name.firstName} {name.lastName} です。</p>
      <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})} />
      <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})} />
    </>
  )
}
export default NameForm