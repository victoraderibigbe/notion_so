import { Dropdown } from "flowbite-react"

const MyDropdown = () => {
  return (
    <Dropdown label="English" dismissOnClick={false}>
      <Dropdown.Item>English</Dropdown.Item>
      <Dropdown.Item>Francais</Dropdown.Item>
      <Dropdown.Item>Deutch</Dropdown.Item>
      <Dropdown.Item>Japanese</Dropdown.Item>
    </Dropdown>
  )
}

export default MyDropdown