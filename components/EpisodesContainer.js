
import { Grid } from "@nextui-org/react"
import Link from "next/link"
import { CardEpisode } from "./CardEpisode"


export const EpisodesContainer = ({episodes}) => {
  return (
    <Grid.Container gap={4} justify="flex-start">
      {episodes.map(episode => (
        <Grid xs={12} sm={6} lg={4} key={episode.id} css={{p: 15}}>
          <Link href={`/episodes/${episode.id}`} style={{ width: "100%"}}>
            <CardEpisode episode={episode} link={true} />
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  )
}