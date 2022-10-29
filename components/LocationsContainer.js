
import { Grid } from "@nextui-org/react"
import Link from "next/link"
import { CardLocation } from "./CardLocation"

export const LocationsContainer = ({locations}) => {
  return (
    <Grid.Container gap={4} justify="flex-start">
      {locations.map(location => (
        <Grid xs={12} sm={6} lg={4} key={location.id} css={{p: 15}}>
          <Link href={`/locations/${location.id}`} style={{ width: "100%", height: "100%" }}>
            <CardLocation location={location} link={true} />
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  )
}