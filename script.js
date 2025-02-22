const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activelink = 0;

link.foreach((link,i) => {
    link.addEventListener('click', () => {
        if(activelink !=i){
            links[activelink].classList.remove('active');
            link.classList.add('active');
            sections[activelink].classList.remove('active');

            setTimeout(() => {
                activelink = i;
                sections[i].classList.add('active');
                
            },1000)
        }
    })git init
    
})


const firebaseConfig = {
    apiKey: "AIzaSyALzndFb4TVCgGUqY03qBly4pUWtbYsAOs",
    authDomain: "my-portfolio-cc56f.firebaseapp.com",
    projectId: "my-portfolio-cc56f",
    storageBucket: "my-portfolio-cc56f.firebasestorage.app",
    messagingSenderId: "6362787475",
    appId: "1:6362787475:web:ccdb2fa8187b0b5264e766",
    measurementId: "G-SS68970HK1"
  };

  //initialize the firebase 
  irebase.initialize.app(firebaseConfig);

  //ensure that firebase is initialized after initializing

  if(!firebaseConfig.app.length){
    firebaseConfig.initializing(firebaseConfig); //db

    //handle contact formsubmission

    document.addEventListener('DOMContentLoaded'), () =>{
        const contactform = document.getElementById('contact-form');

        if(contactform){
            contactform.addEventListener('submit',(event) =>{
                event.preventDefault();

                const name = document.getElementById('name').Value;
                const mail = document.getElementById('mail').Value;
                const message = document.getElementById('msg').Value;

                if(!message || !mail || !name){
                    alert("all fields are mandatory to fill.!!")
                    return;
                }

                //store tha data in the data base
                db.collection('collection').add({
                    name:name,
                    mail:mail,
                    message:message

                })
                .then(() => {
                    console.log("contact form submitted successfully!");
                    alert('contact form submitted successfully!');
                })
            })
            .catch((error) => {
                console.log('error submiting the form!');
                alert('error in submitting the form!');
            })
        }
    }
  }