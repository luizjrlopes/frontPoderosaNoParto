import styled from 'styled-components';

export const Container = styled.div`
width: 479px;
height: 550px;


display:flex;
flex-direction:column;
align-items:center;
justify-content: center;




.inputLogin{
  
   margin-top: 55px;
   width: 469px;
   height: 100px;
   border:none;
   border-radius:10px;
   font-size:25px;
   padding-left:10px;
   box-shadow:10px 30px 90px rgba(112,112,112,0.2);
   color:rgb(112,112,112);
};
.btnLogin{
    margin-top: 20px;
 color:white ;
    //margin-bottom: 20px;
    width: 479px;
    height: 100px;
    border:none;
    border-radius:40px;
    box-shadow:10px 30px 90px rgba(112,112,112,0.2);
    background:#6D3E5D;
    font-size:25px;
    cursor:pointer;
 };


 .btnCadastre_se{
    margin-top: 35px;
    width: 308px;
    height: 94px;
    border:none;
    border-radius:10px;
    box-shadow:10px 30px 90px rgba(112,112,112,0.3);
    background: #6D3E5D;
    color:white ;
    font-size:30px;
    cursor:pointer;
 };
 .dividir::after{
   width: 479px;
   
  
    content:"___________________________________________________________";
    color: #707070;
    
    
    }
    a{
width: 177px;
   height: 22px;
        color: #6D3E5D;
        font-size:20px;
        font-weight: bold;
        text-decoration:none;
        margin-top: 37px;
margin-bottom: 37px;
        
        &:hover{
            color: #C79518;//dourado
        }
        
        };


`



