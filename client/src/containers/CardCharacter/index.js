import React from 'react'
import { Card, Icon, Button, Image } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardCharacter = (props) => (
<Card.Content>
  <Card>
    <Card.Content>
    <Image
    floated='right'
    size='mini'
    src=''
    />
    <Card.Header>{props.title}</Card.Header>
    <Card.Meta>Who Knows</Card.Meta>
    <Card.Description>
      {props.Description}
    </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>
          GitHub
        </Button>
        <Button basic color ='blue'>
          Project
        </Button>
      </div>
    </Card.Content>
  </Card>
</Card.Content>
)

export default CardCharacter