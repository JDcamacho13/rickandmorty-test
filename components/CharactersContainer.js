
import { Card, Container, Grid, Link, Row, Text } from "@nextui-org/react"
import Image from "next/image"

const getIdLocationOrOrigin = (url) => {
  const arr = url.split('/')
  return arr[arr.length - 1]
}

export const CharactersContainer = ({characters, total}) => {
  return (
    <>
    <Text h4 size={"$xl"}>Total: {total}</Text>
      <Grid.Container gap={4} justify="flex-start">
        {characters.map(character => (
          <Grid xs={12} sm={6} lg={4} key={character.id} css={{p: 15}}>
            <Card isHoverable>
              <Card.Header css={{ p: 0 }}>
              <Card.Image
                  src={character.image}
                  objectFit="cover"
                  width="100%"
                  height={350}
                  autoResize
                  alt={character.name}
                />
              </Card.Header>
              <Card.Body css={{p: 0}}>
                <Row wrap="wrap" justify="space-between" align="center" css={{p: '$5'}}>
                  <Text h3 size={"$2xl"}>{character.name}</Text>
                  {(character.gender === 'Female' || character.gender === 'Male') && 
                    <Image src={`/images/${character.gender}.png`} width={35} height={35} alt="gender image"/>
                  }
                </Row>
                <Card.Divider />
                <Container>
                  <Row>
                  {
                    character.status === 'Dead'
                      ? <><Text size={"$lg"} >Status: <Text del size={"$lg"} css={{my: '$8', marginRight: '$4'}}>Dead</Text> ☠</Text></>
                      :  <Text size={"$lg"}>Status: {character.status}</Text>
                  }
                  </Row>
                  <Row>
                    <Text>
                      Location: <Link block color="success" href={`/locations/${getIdLocationOrOrigin(character.location.url)}`}>{character.location.name}</Link>
                    </Text>
                  </Row>
                  <Row>
                    <Text>
                      Origin: <Link block color="success"href={`/locations/${getIdLocationOrOrigin(character.origin.url)}`}>{character.origin.name}</Link>
                    </Text>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  )
}