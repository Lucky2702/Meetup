import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Card = styled.div`
  height: 500px;
  width: 650px;
  margin: auto;
  display: flex;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 400px;
  width: 300px;
`

export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 350px;
  margin: auto;
`

export const Label = styled.label`
  color: #7b8794;
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 5px;
  align-self: flex-start;
`

export const InputText = styled.input`
  width: 100%;
  height: 40px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  border: 1px solid #64748b;
  outline: none;
  padding-left: 8px;
  margin-bottom: 10px;
  border-radius: 6px;
`
export const Select = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  border-radius: 6px;
`
export const Option = styled.option`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
`
export const Button = styled.button`
  color: #cbd5e1;
  background-color: #2563eb;
  border: none;
  border-radius: 6px;
  padding: 8px;
  height: 40px;
  width: 180px;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
`
export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 24px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 18px;
`
