import { Image, Link as LinkUI, Navbar } from "@nextui-org/react"
import Link from "next/link"

export const Header = ({ currentRoute }) => {
  const [__,path] = currentRoute.split('/') 
  return (
    <header>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Link href="/">
            <Image src="/images/logo.png" width={200} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn='xs' />
        <Navbar.Content activeColor='success' hideIn="xs" variant='underline'>
          <Navbar.Link isActive={path === '' || path === 'search'} href="/">Characters</Navbar.Link>
          <Navbar.Link isActive={path === 'locations'} href="/locations">Locations</Navbar.Link>
          <Navbar.Link isActive={path === 'episodes'} href="/episodes">Episodes</Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem
            activeColor="success"
            isActive={path === '' || path === 'search'}
          >
              <LinkUI
                block
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href='/'
              >
                Characters
              </LinkUI>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            activeColor="success"
            isActive={path === 'locations'}
            
          >
              <LinkUI
                block
                color="inherit"
                css={{
                  minWidth: "100%",
                  borderBottom: "Black"
                }}
                href='/locations'
              >
                Locations
              </LinkUI>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            activeColor="success"
            isActive={path === 'episodes'}
            
          >
              <LinkUI
                block
                color="inherit"
                css={{
                  minWidth: "100%",
                  borderBottom: "Black"
                }}
                href='/locations'
              >
                Episodes
              </LinkUI>
          </Navbar.CollapseItem>
          </Navbar.Collapse>
      </Navbar>    
    </header>
  )
}