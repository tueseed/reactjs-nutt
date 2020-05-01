import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


const Cardmsg = (props) => {
  return (
    <div className="mt-2">
      <Card className="bg-dark text-white" body>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.reqNumber}</CardText>
        {/* <Button className="btn btn-info">Go somewhere</Button> */}
      </Card>
    </div>
  )
}

export default Cardmsg