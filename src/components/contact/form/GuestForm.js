import React,{useState} from 'react';

import {Form, Label, Input, MsgInput, Button, Select, Option, Container,CommentsDiv,UserCard} from "./Form.styled"


const GuestForm=()=> {
  const initialValues={name:"",email:"",enjoy:"",post:"", interest:""}

  const [display,setDisplay]=useState(false)
  const [formValues,setFormValues]=useState(initialValues);
  const [userCard,setUserCard]=useState([])

  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setFormValues({...formValues, [name]:value})
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    setUserCard([...userCard, formValues]);
    setFormValues(initialValues);
    console.log(userCard);
  }

  const onSubmitButtonClicked=()=>{
    setDisplay(true);
  }
    return(
      <Container>
        <Form onSubmit={handleFormSubmit}>
          
          <Label>Choose your interest</Label>
          <Select name='interest' onChange={handleInputChange} value={formValues.interest}>
            <Option></Option>
            <Option>UI solutions</Option>
            <Option>Aviation Career</Option>
            <Option>Military</Option>
          </Select>
          
          <Label>Name</Label>
          <Input type="text" name="name" onChange={handleInputChange} value={formValues.name}/>
          
          <Label>E-mail Adress</Label>
          <Input type="email" name="email" onChange={handleInputChange} value={formValues.email}/>
          
          <Label>Did you enjoyed your tour?</Label>
          <Select name='enjoy' onChange={handleInputChange} value={formValues.enjoy}>
            <Option></Option>
            <Option>Yes, sure..</Option>
            <Option>Eeh..</Option>
            <Option>No, not really</Option>
          </Select>
          

          <Label>Message/Comment/Advise  -  All are appriciated</Label>
          <MsgInput type="text" name="post" onChange={handleInputChange} value={formValues.message}/>
          
          <Button onClick={onSubmitButtonClicked}> Submit and See All Comments</Button>
        </Form>
        <CommentsDiv style={{display:`${display?"":"none"}`}}>
            <h3>Comments from Visitors</h3>
          {userCard.map((card,idx)=>(
            <UserCard key={idx}>
              Name:<br/> {card.name} <br/><hr/>
              Email:<br/> {card.email}<br/><hr/>
              Interested in:<br/>{card.interest}<br/><hr/>
              Message:<br/> {card.post}<br/><hr/>
              Experience:<br/> {card.enjoy}
              <br/><br/>
            </UserCard>
            
          ))}
        </CommentsDiv>
      </Container>
  )
}

export default GuestForm;