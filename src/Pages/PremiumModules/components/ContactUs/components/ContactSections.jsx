import React, { useState} from "react";
import {Container,Title,SignInContainer,SignUpContainer,Input,Form,Button,Overlay,OverlayContainer,LeftOverlayPanel,RightOverlayPanel,Paragraph,GhostButton,} from './contact.js';

const ContactSections = ({ onSwitchToSignup }) => {
  // const [errorMessage, setErrorMessage] = useState("");
  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Query: '',
    mobileNo: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container>
    <SignUpContainer signinIn={signIn}>
      <Form onSubmit={()=>{alert("sign up")}}>
        <Title>Student Query</Title>
        {/* {errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )} */}
  
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="tel"
          placeholder="Mobile Number"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleInputChange}
          required
        />
        <Input
          type="Text"
          placeholder="Query"
          name="Query"
          value={formData.Query}
          onChange={handleInputChange}
          required
        />
        
  
        <Button type="submit">send my query</Button>
      </Form>
    </SignUpContainer>
  
    <SignInContainer signinIn={signIn}>
      <Form onSubmit={()=>{alert("login")}}>
        <Title>Business Enquiry</Title>
  
        {/* {errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )} */}
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          placeholder="Company Name"
          name="Companyname"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="tel"
          placeholder="Mobile Number"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleInputChange}
          required
        />
        <Input
          type="Text"
          placeholder="Query"
          name="Query"
          value={formData.Query}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Send Enquiry</Button>
      </Form>
    </SignInContainer>
  
    <OverlayContainer signinIn={signIn}>
      <Overlay signinIn={signIn}>
        <LeftOverlayPanel signinIn={signIn}>
          <Title>Contact us </Title>
          <Paragraph>
            Having Query ? you can React out to us from our contact informations <br/><br/> contact number :- +91 7400566242<br/><br/>office:- 379, dwarkpauri,<br></br>indore 452009 India<br/><br/>email:-noteseraa@gmail.com
          </Paragraph>
          <GhostButton onClick={() => toggle(true)}>
          business enquiry 
          </GhostButton>
        </LeftOverlayPanel>
  
        <RightOverlayPanel signinIn={signIn}>
          <Title>Contact us</Title>
          <Paragraph>
          Having Query ? you can React out to us from our contact informations <br/><br/> contact number :- +91 7400566242<br/><br/>office:- 379, dwarkpauri,<br></br>indore 452009 India<br/><br/>email:-noteseraa@gmail.com
          </Paragraph>
          <GhostButton onClick={() => toggle(false)}>
            Student Enquiry
          </GhostButton>
        </RightOverlayPanel>
      </Overlay>
    </OverlayContainer>
  </Container>
  );
};

export default ContactSections;
