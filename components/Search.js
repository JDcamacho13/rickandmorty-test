import { Input, Loading, Spacer } from "@nextui-org/react"
import { useRouter } from "next/router"
import { useState } from "react"

export const Search = ({ initialValue = '' }) => {
  const [name, setName] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    router.push((`/search/${name}`))
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <Spacer  y={2.5}/>
      <Input  
        initialValue={initialValue} 
        onChange={e => setName(e.target.value)} 
        bordered 
        labelPlaceholder="Search" 
        clearable width="100%" 
        color="success" 
        contentRight={loading && <Loading size="xs" />}
        required
      />
      <Spacer  y={1.25}/>
    </form>
  )
}