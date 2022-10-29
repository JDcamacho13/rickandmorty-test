import { Card, Container, Row, Text } from "@nextui-org/react"
import Link from "next/link"

const locationsTypes = {
  'PlanetEarth': '🌎',
  'Planet': '🪐',
  'Cluster': '🌌',
  'Space station': '🛰',
  'Microverse': '🤏',
  'TV': '📺',
  'resort': '⛱️',
  'Fantasy town': '🏰',
  'Dream': '💭',
  'unknown': '❓',
  'Menagerie': '🐾',
  'Dwarf planet (Celestial Dwarf)': '🏰',
  'Miniverse': '🤏'
}

export const CardLocation = ({location, link = false}) => (
  <>
  <Card isHoverable isPressable={link}>
    <Card.Body>
      <Row>
        <Container direction="column">
          <Text h2 css={{ marginBottom: '0' }} >{location.name}</Text>
          <Text css={{ marginTop: '$1' }} size="$lg">{location.type}</Text>
        </Container>
        {
          location.name.includes('Earth') 
          ? <Text size={'$2xl'}>{locationsTypes['PlanetEarth']}</Text> 
          : <Text size={'$2xl'}>
              {locationsTypes[location.type] !== undefined ? locationsTypes[location.type] : locationsTypes['Cluster']}
            </Text>
        }
      </Row>
      <Container>
        <Text>{location.dimension}</Text>
      </Container>
    </Card.Body>
  </Card>
  </>
)
