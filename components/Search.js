import { Button, Input, Loading, Row, Spacer, Dropdown, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { useMemo, useState } from "react"

const Select = ({ selected, setSelected }) => {
  return (
    <Row  align="center">
    <Text h4 css={{mr: "$5"}}>Status:</Text>
    <Dropdown>
      <Dropdown.Button flat color="success" css={{ tt: "capitalize" }}>
        {selected}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="success"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="all">All</Dropdown.Item>
        <Dropdown.Item key="alive">Alive</Dropdown.Item>
        <Dropdown.Item key="dead">Dead</Dropdown.Item>
        <Dropdown.Item key="unknown">Unknown</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
    </Row>
  )
}

export const Search = ({ width, initialValue = '', statusValue = 'all' }) => {
  const [name, setName] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [characterStatus, setCharacterStatus] = useState([statusValue])
  const router = useRouter()

  const route = useMemo(() => {
    const [status] = characterStatus
    const filterStatus = status === 'all' ? '' : `?status=${status}`
    let searchName = ''
    if (filterStatus === '') {
      searchName = name === '' ? '' : `?search=${name}`
    } else {
      searchName = name === '' ? '' : `&search=${name}`
    }
    return (`/search/${name}` + filterStatus + searchName)
  },[name, characterStatus])
  
  const searchWith = useMemo(() => {
    let percent = '60%'
    if (width > 360) {
      percent = '70%'
    }
    if (width > 560) {
      percent = '80%'
    }
    if (width > 720) {
      percent = '85%'
    }
    if (width > 960) {
      percent = '90%'
    }
    if (width > 1100) {
      percent = '92.5%'
    }
    return percent
  }, [width])

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    router.push((route))
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <Spacer  y={2.5}/>
      <Row justify="space-between">
        <Input  
          initialValue={initialValue} 
          onChange={e => setName(e.target.value)} 
          bordered 
          labelPlaceholder="Search" 
          clearable 
          width={searchWith}
          color="success" 
          contentRight={loading && <Loading size="xs" />}
          required
        />
        <Button color="success" auto type="submit">Search</Button>
      </Row>
      <Spacer y={1} />
      <Select route={route} selected={characterStatus} setSelected={setCharacterStatus} />
      <Spacer  y={1.25}/>
    </form>
  )
}