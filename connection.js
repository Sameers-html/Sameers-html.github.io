const express=require('express');
var nodemailer = require('nodemailer');
var bodyparser=require('body-parser');
const multer=require('multer');
const fs=require('fs-extra');
const app=express();
var urlencodedparser=bodyparser.urlencoded({ extended: false });
const port=3000;
app.use(express.static('DANY'));
app.use('/css',express.static(__dirname+'CSS/About'));
app.use('/images',express.static(__dirname+'imgs'));
app.use('/js',express.static(__dirname+'JS'));
app.get('/',(req,res)=>{
  res.redirect('/Home')
})
app.get('/Home',(req,res)=>{
    res.sendFile(__dirname+'/DANY/Html/index.html')
});
app.get('/aboutus',(req,res)=>{
    res.sendFile(__dirname+'/DANY/Html/about.html')
});
app.get('/solutions',(req,res)=>{
  res.sendFile(__dirname+'/DANY/Html/solutions.html')
});

app.get('/flock',(req,res)=>{
  res.sendFile(__dirname+'/DANY/Html/flock-page.html')
  
  });
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        var pathme="./Resume"
        // fs.mkdirSync(pathme);
        
     cb(null, pathme);
     },
     filename: (req, file, cb) => {
       let photo = `${file.originalname}`
       req.body.photo = photo
      cb(null, photo);
   },
  });
  var uploading = multer({
    storage:storage
   })
   
   
   var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
      user: '1.dev.trolley@gmail.com',
      pass: 'nencyxrdmuwqjvzi'
    }
  });
  
  function interviewee(Full_Name,Job_Title,Email,Phone,Year_of_expre,driver_license,filename){
    const {createPool}= require('mysql');
    const pool=createPool({
      host:"localhost",    
      user:"root",
      password:"",
      database:"trolley"
    })
    pool.query(`INSERT INTO interviewee( Full_Name, Job_Title, Email, Phone, Year_of_expre, driver_license) VALUES ('${Full_Name}','${Job_Title}','${Email}','${Phone}','${Year_of_expre}',${driver_license});`,(err,res,fields)=>{
      if(err){
        return console.log(err);
      }else{
        move_file_interviewee(filename,Email,Full_Name)
            }});
            
          }
          function move_file_interviewee(filename,Email,Full_Name){
            const {createPool}= require('mysql');
    const pool=createPool({
      host:"localhost",    
      user:"root",
      password:"",
      database:"trolley"
    })
    pool.query('SELECT ID FROM `interviewee` WHERE `Resume` = "" AND Full_Name="'+Full_Name+'"',(err,res,fields)=>{
      if (err) {
        console.log(err);
      } else{
        console.log(res[0].ID);
        var pathme="/Resume/"+res[0].ID+Full_Name
        fs.mkdirSync("."+pathme);
        console.log(filename)
        fs.move("./Resume/"+filename, "."+pathme+"/"+filename, err => {});
        pool.query('UPDATE `interviewee` SET `Resume`="'+pathme+"/"+filename+'" WHERE `ID`='+res[0].ID+' AND `Full_Name`="'+Full_Name+'"',(err,result)=>{
          if(err){
            console.log(err);
          }else{
            
            


            
            let mailOptions = {
              from: '1.dev.trolley@gmail.com',
              to: `${Email}`,
              subject: 'this is a confirm Email from 1Trolley Business',
              text: `Hello, Mr/s ${Full_Name} \nThanks for contacting us, One of our representative will contact with you as soon as possible.`
            };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                      
                      // alert("data has been sent");
                    }
                  });
                  
                  
                }
            
            
          
        })
        

      }
    })
          }
    
  
  
  function Contact_Us(Full_Name,Company_Name,Email,Phone,Customized_Solution){
    
    const {createPool}= require('mysql');
    const pool=createPool({
      host:"localhost",    
      user:"root",
      password:"",
      database:"trolley"
    })
    pool.query(`INSERT INTO contact_us(Full_Name, Company_Name, Email, Phone, Customized_Solution) VALUES ('${Full_Name}','${Company_Name}','${Email}','${Phone}','${Customized_Solution}');`,(err,res,fields)=>{
      if(err){
        alert("data failed to sent");
        return console.log(err);
      }else{
        var mailOptions = {
          from: '1.dev.trolley@gmail.com',
          to: `${Email}`,
          subject: 'this is a confirm Email from 1Trolley Business',
          text: `Hello, Mr/s ${Full_Name} \nThanks for contacting us, One of our representative will contact with you as soon as possible.`
        };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  
                  // alert("data has been sent");
                }
              });
              
              
              
            }});
            
          }
          
          

          var f=uploading.fields([{name:"file",maxCount:1}])
          app.post('/send/aboutus',f,urlencodedparser,async (req,res)=>{
            console.log()
            if(req.body.agree.toUpperCase()==="YES".toUpperCase()){
              if(Object.entries(req.files).length === 0){
                
                await interviewee(req.body.Full_Name,req.body.Job_Title,req.body.Email,req.body.Phone,req.body.Y_Of_EX,1,"")
              }else{
                await interviewee(req.body.Full_Name,req.body.Job_Title,req.body.Email,req.body.Phone,req.body.Y_Of_EX,1,req.files['file'][0].filename)
              }
              
            }else{
              if(Object.entries(req.files).length === 0){
             await interviewee(req.body.Full_Name,req.body.Job_Title,req.body.Email,req.body.Phone,req.body.Y_Of_EX,0,"")
            }else{
                await interviewee(req.body.Full_Name,req.body.Job_Title,req.body.Email,req.body.Phone,req.body.Y_Of_EX,0,req.files['file'][0].filename)

              }
            }
            
            // Contact_Us(req.body.Full_Name,req.body.Email,req.body.Message);
            return res.redirect('/');
            
})
app.post('/send/contactus',urlencodedparser,(req,res)=>{
  // console.log(req.params)
  // console.log(req.body)
  Contact_Us(req.body.Full_Name,req.body.Company_Name,req.body.Email,req.body.Phone,req.body.Customized_Solution)
    // Contact_Us(req.body.Full_Name,req.body.Email,req.body.Message);
return res.redirect('/');

})



app.listen(port,()=>console.info(`Listening on port ${port}`));