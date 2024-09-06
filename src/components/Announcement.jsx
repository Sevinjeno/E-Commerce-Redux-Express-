import styled from "styled-components"

const Container=styled.div`
height: 30px;
background-color:teal;
color: white;
display: flex;
font-size: 14px;
align-items: center;
justify-content: center;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal ! Free Shipping on Orders over 500.
    </Container>
  )
}

export default Announcement