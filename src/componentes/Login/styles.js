import styled from 'styled-components';

export const Container = styled.div`
width: 800px;
height: 780px;

padding:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
border-radius:5%;
box-shadow:2px 2px 10px #707070;

#senhas{
      display:flex;
      align-items:center;
      justify-content:center;
    //background:yellow;
      width: 90%;
      height: 130px;
      
      

display:flex;
align-items:center;

button{
   background:none;
  border:none;
   position:relative;
margin-top:20px;
margin-left:-65px;
   width: 60px;
      height: 60px;

}
.inputLogin{
  
  margin-top: 10px;
  width: 100%;
  height: 80px;
  border:none;
  border-radius: 20px;
  font-size:25px;
  padding-left:10px;
  box-shadow:10px 30px 90px rgba(112,112,112,0.2);
  color:rgb(112,112,112);
};
   }



.btnLogin{
    margin-top: 30px;
 color:white ;
    //margin-bottom: 20px;
    width: 679px;
    height: 100px;
    border:none;
    border-radius: 50px;
    box-shadow:10px 30px 90px rgba(112,112,112,0.2);
    background:#6D3E5D;
    font-size:30px;
    cursor:pointer;
 };

 .btnCadastre_se{
    margin-top: 35px;
    width: 508px;
    height: 94px;
    border:none;
    border-radius:15px;
    box-shadow:10px 30px 90px rgba(112,112,112,0.3);
    background: #B24C4E;
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
   width: 377px;
   height: 30px;
   display:flex;
   justify-content:center;
        color: #3D80F3;
        font-size:23px;
        text-decoration:none;
        margin-top: 37px;
         margin-bottom: 37px;
       
        
        &:hover{
         text-decoration: underline;
        }
        
        };


`




