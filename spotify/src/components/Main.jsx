import { Container, Card, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'




const Main = (props) => {

  const [music, setMusic] = useState([])

  useEffect(() => {
    const getMusic = async () => {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.search}`)
      let musicQuery = await response.json()
      console.log('what is it', musicQuery);
      setMusic(musicQuery.data)

    }

    getMusic()
  }, [])


  return (
    <Container id='body'>


      <Row className='d-flex row-cols-sm-1 row-cols-md-2 row-cols-lg-4 '>
        {
          music.map(song => (

            <Col key={song}>
              <Card style={{ display: 'flex', display: 'inline', width:'26rem' }} className='m-5'>
                <Card.Img variant="top" src={song.album.cover_medium} />
                <Card.Body>
                  <Card.Title style={{ color: 'white' }}>{song.artist.name}</Card.Title>

                </Card.Body>
              </Card>
            </Col>
          )
          )
        }

      </Row>
    </Container>

  )
}

export default Main;