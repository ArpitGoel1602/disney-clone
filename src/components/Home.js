import styled from 'styled-components';

const Home = (props) => {
    return <Container>Home
        
    </Container>
}

const Container=styled.main`
    position: relative;
    min-height:calc(100 vh - 250 px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding:0 calc(3.5vw + 5px);

    &:after{
        background : url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index : -1;
    }

`

export default Home;