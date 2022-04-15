import React, { useState } from "react";

//CSS: STYLED-COMPONENTS
import {
  Form,
  Label,
  Input,
  MsgInput,
  Button,
  Select,
  Option,
  Container,
  CommentsDiv,
  UserCard,
} from "./Form.styled";

//CONSTANTS
import { guestFormInitialValues } from "../../../constants/ContactConstants";

const GuestForm = () => {
  const [commentsDisplay, setCommentsDisplay] = useState(false);
  const [formValues, setFormValues] = useState(guestFormInitialValues);
  const [userCards, setUserCards] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserCards([...userCards, formValues]);
    setFormValues(guestFormInitialValues);
    console.log(userCards);
  };

  const onFormSubmitButtonClicked = () => {
    setCommentsDisplay(true);
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Label>Choose your interest</Label>
        <Select
          name="interest"
          onChange={handleInputChange}
          value={formValues.interest}
        >
          <Option></Option>
          <Option>UI solutions</Option>
          <Option>Aviation Career</Option>
          <Option>Military</Option>
        </Select>

        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
        />

        <Label>E-mail Adress</Label>
        <Input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={formValues.email}
        />

        <Label>Did you enjoyed your tour?</Label>
        <Select
          name="enjoy"
          onChange={handleInputChange}
          value={formValues.enjoy}
        >
          <Option></Option>
          <Option>Yes, sure..</Option>
          <Option>Eeh..</Option>
          <Option>No, not really</Option>
        </Select>

        <Label>Message/Comment/Advise - All are appriciated</Label>
        <MsgInput
          type="text"
          name="post"
          onChange={handleInputChange}
          value={formValues.message}
        />

        <Button onClick={onFormSubmitButtonClicked}>
          Submit and See All Comments
        </Button>
      </Form>
      <CommentsDiv style={{ display: `${commentsDisplay ? "" : "none"}` }}>
        <h3>Comments from Visitors</h3>
        {userCards.map((userCard, idx) => (
          <UserCard key={idx}>
            Name:
            <br /> {userCard.name} <br />
            <hr />
            Email:
            <br /> {userCard.email}
            <br />
            <hr />
            Interested in:
            <br />
            {userCard.interest}
            <br />
            <hr />
            Message:
            <br /> {userCard.post}
            <br />
            <hr />
            Experience:
            <br /> {userCard.enjoy}
            <br />
            <br />
          </UserCard>
        ))}
      </CommentsDiv>
    </Container>
  );
};

export default GuestForm;
