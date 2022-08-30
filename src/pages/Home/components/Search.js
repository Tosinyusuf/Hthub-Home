import { useState } from 'react'

export const Search = () => {
  const [value, setValue] = useState('')

  //handle inputs
  const handleInput = (e) => {
    setValue(e.target.value)
  }
  return (
    <form>
      <input
        type="text"
        name="search"
        placeholder="Your email address"
        value={value}
        onChange={handleInput}
      ></input>
    </form>
  )
}