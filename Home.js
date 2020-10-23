import React,{useRef, useEffect} from 'react'
import { gsap,TweenMax, TimelineLite, Power3} from 'gsap'  //animation=TimelineLite ,power3=easing purposes
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Home.css'

function Home() {


   //for whole body
    let app = useRef(null)

    //variable for images
    let image = useRef(null)
    //content variable
    let line1= useRef(null)
    let line2= useRef(null)
    let line3= useRef(null)
    //for animation
    let tl = new TimelineLite()

    useEffect(()=>{
        gsap.from([line1,line2,line3],0.8,{
            delay:0.8,
            opacity:0,
            ease:'power3.easeOut',
            y:20,
            stagger:{
                each:0.15,
                from: "start"
            }
        })
    },[line1,line2,line3])


    useEffect(()=>{
        //invisible after page load using tweenmax {0 = duration }
        //to = how our final state are going to look like
        TweenMax.to(app,0,{css: {visibility:'visible'}})
    
       //image variable
        
       //first second third egula holo main akta diver moddhe por por joto div sob 1st 2nd evabe count hoi
       //2nd r akta image thakle likhte hoto  const girlImage = image.secondElementChild

       const aboutImage = image.firstElementChild
       
       //target=aboutImage duration= 1.2  then configuration{}
       // from =how our initial state look like
       //tl.from here from means coming from 1400px right to its original position
       tl.from( aboutImage, 1.2 ,{x:1400, ease: Power3.easeOut})
           // scale ==create zoom effect when image going to its original position with duration 0.2
         .from(aboutImage.firstElementChild, 1.5, {scale:1.6, ease: Power3.easeOut}, 0.2)
         
         //second kono image thakle oprer dui line copy kore dilei hbe aboutImage er jaigate te next image er variable er name
         // tl.from( girlImage, 1.2 ,{x:1400, ease: Power3.easeOut})
         //tl.from(girlImage.firstElementChild, 1.5, {scale:1.6, ease: Power3.easeOut}, 0.2)
    })


    return (
        <div className='home' ref={ el => app = el }>
            <div className='about-bottom'>
                <h2 className='about'>About</h2>
                <div className='div-bottom'></div>
            </div>
            <div className='para-img'>
              <div className='paraText'>
                  <div>
                    <p className='para'>
                        <span ref={el=> line1 = el}>I'm a React Front End Developer.</span>
                        <span ref={el=> line2 = el}>I'm a React Front End Developer.</span>
                        <span ref={el=> line3 = el}>I Have Good Knowledge about Animations.</span>
                   </p>
                  </div>
              </div>

              <div 
              ref={ el => image = el }
              className='indexImg'
              >
                <div>
                   <img src='Images/rony.jpg' alt=''/>
                </div>
              </div>

            </div>
            <div className='contact'>
                <div className='about-bottom'>
                    <h2 className='about'>Contact</h2>
                    <div className='div-bottom'></div>
                </div>
                <div className='addresses'>
                    <address>
                        <p className='address'>rakibrony@gmail.com</p>
                        <p className='address'>Jibannagar,Chuadanga</p>
                        <p className='address'>postal code 1300</p>
                        <p className='address'>01997513691</p>
                    </address>
                </div>

            </div>
        </div>
    )
}

export default Home
