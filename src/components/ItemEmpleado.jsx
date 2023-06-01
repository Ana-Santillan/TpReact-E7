import { useEffect } from "react";
import { Button, ListGroup, Row , Col} from "react-bootstrap";
import AvatarEmpleado from "./AvatarEmpleado";

const ItemEmpleado = ({empleado}) => {

  return (
    <ListGroup.Item>
      <Row>
        <Col md={4}>
          <AvatarEmpleado/>
        </Col>
        <Col md={8}>
          <h3>{empleado.fullName}</h3>
          <h6>{empleado.title}</h6>
          <span>{empleado.department}</span>
        </Col>
      </Row>

    </ListGroup.Item>
  );
};

export default ItemEmpleado;
