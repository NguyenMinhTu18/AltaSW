import { Button, Form, Input } from "antd";
import styled, { keyframes } from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media screen and (max-width:600px){
    font-size: 16px;
    width: 80vw;
    height: 60vh;
  }
`;
export const LoginForm = styled.div`
display: flex;
 width: 100%;
  background: white;
  justify-content: center;
  flex-direction: column;
  align-items: center;
;
`;
export const LoginBanner = styled.div`
display: flex;

  width: 0%;
  justify-content: center;
  align-items: center;
`;
export const ImgLogo = styled.img`

`
export const ImgBanner = styled.img`
  width: 0%;
`
export const Title = styled.p`
  font-size: 3rem;
  margin: 0;
  /* float: right; */

  @media screen and (max-width:600px){
    font-size: 4rem;
  }
`;


export const FormLogin = styled(Form)`
  display: block;
  background: transparent;
  width: 30%;
  margin-top: 3rem; 

`;

export const LabelCustom = styled.h3`
  font-size: 1rem;
  // margin: 0;
  margin-top: 30px; 

  color: black;

  @media screen and (max-width:600px){
    font-size: 1.5rem;
  }
`;

export const InputCustom = styled(Input)`
  width: 600px;
  display: flex;
  margin: auto;
    
 
`

export const ButtonLogin = styled(Button)`
  border: none;
  margin-top: 2rem;
  width: auto;
  height: auto;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  background: #D85210;
  padding: 0.5rem 1.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  @media screen and (max-width:600px){
    font-size: 1rem;
    padding:1rem 2.5rem;
  }
`;


