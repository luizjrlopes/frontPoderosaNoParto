import styled from 'styled-components';

export const Container = styled.div`
  max-width:100%;
  min-height:870px;
  
  padding:20px;
   display:flex;
   align-items:center;
    justify-content:space-around;
 

`


export const CenterSide = styled.div`
   
    padding:25px;
    min-width: 50%;//1920px;
    height: 85%;
    box-shadow:2px 2px 10px #707070;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content: center;
   
.audio {
    text-decoration:none;
    background:yellow;
    width:100px;
}
    p{
    
     
        min-width: 380px;
        min-height: 84px;
        font-size:50px;
        font-weight: bold;
        text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);
        color:#B24C4E;
        display:flex;
        justify-content:center;
        margin-bottom:20px;

    }
    span{

    
        font-size:90px;
       
        min-width: 460px;
        min-height: 94px;
        font-weight: bold;
        text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);
        color:#707070;
        display:flex;
        justify-content:center;
        margin-bottom:50px;

        

    }

    audio{

        
        width: 100%;
        height: 94px;
        font-weight: bold;
        font-size:30px; 
        display:flex;
        justify-content:center;
        margin-bottom:80px;

    }
    .buttonExercicios {

        width: 550px;
        height: 100px;
        border:none;
        margin-top:20px;
        margin-bottom:40px;
        box-shadow:10px 30px 90px rgba(112,112,112,0.3);
        background:#6D3E5D;
        color:white ;
        font-size:30px;
        cursor:pointer;
    };
    .buttonExercicios:hover{
       
        background:#C79518;
    };




`



