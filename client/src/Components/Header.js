import React from 'react'
import { Navbar, Nav, Container, Button, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home'>Mern - Blog</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <LinkContainer to='/create'>
              <NavLink>
                <Button variant='outline-warning'>+ paylaş</Button>
              </NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
