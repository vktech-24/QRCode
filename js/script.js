const frm=document.querySelector('#frm');
const output=document.querySelector('#output');
const loading=document.querySelector('#loading');
const qrcodeElement=document.querySelector('#qrcode');

const saveBtn=document.querySelector('#btn-save');

function genarateQR(e){
    e.preventDefault();
    const url=document.querySelector('#url').value;
    const size=document.querySelector('#size').value;
    const colorDark=document.querySelector('#colorDark').value;
    const colorLight=document.querySelector('#colorLight').value; 

    if(url===""){
        alert('Please Enter Your URL')
    }else{
        //show spinner
        loading.style.display='flex'
              
        setTimeout(()=>{
        //hide spinner
        loading.style.display='none'
        
        qrcodeElement.innerHTML="";

        const qrcode=new QRCode('qrcode',{
            text:url,
            widht:size,
            height:size,
            colorDark:colorDark,
            colorLight:colorLight,
            correctLevel: QRCode.CorrectLevel.H
        });
        },1000)
        downloadlink()
    }
}

frm.addEventListener('submit',genarateQR);

function downloadlink(){
    const imgSrc=qrcodeElement.querySelector('img').src;
    saveBtn.href=imgSrc;
}


saveBtn.addEventListener('click',()=>{
     
    setTimeout(()=>{
        
        saveBtn.download='qrcode';
},50)
})