import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import download from '../assets/images/download.jpg'

export default function projects() {
  return (
    <>
      <div className="project-section container">
        <div className="row">
          <div className="col col-sm=12 col-md-4 col-lg-4">

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={download} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col col-sm=12 col-md-4 col-lg-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={download} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col col-sm=12 col-md-4 col-lg-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={download} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col col-sm=12 col-md-4 col-lg-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={download} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>


          <div className="col col-sm=12 col-md-4 col-lg-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={download} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>


          <div className="col col-sm=12 col-md-4 col-lg-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={download} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
}
