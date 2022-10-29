import { Card, Container, Row, Text } from "@nextui-org/react"

export const CardEpisode = ({episode, link = false}) => (
  <>
  <Card isHoverable isPressable={link} css={{h: "100%"}}>
    <Card.Body>
      <Row  align="center">
        <Container>
          <Text h2 size={"$2xl"}  css={{mb: "0"}} color="success">{episode.name}</Text>
          <Text h3 css={{m: "0"}}>{episode.episode}</Text>
        </Container>
        <Text>{episode.air_date}</Text>
      </Row>
    </Card.Body>
  </Card>
  </>
)
