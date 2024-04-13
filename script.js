const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var t1 = gsap.timeline({scrollTrigger:{
    trigger:".part-1",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    // markers:true,
    pin:true,
}})

t1.to(".rotate-div",{
    rotate:-15,
    scale:0.8,
},'a')
t1.to("#row-div-2",{
    marginTop:"5%"
},'a')
t1.to("#row-div-3",{
    marginTop:"-5%"
},'a')
t1.to("#row-div-4",{
    marginTop:"-2%"
},'a')
t1.to("#row-div-5",{
    marginTop:"-5%"
},'a')
t1.to(".overlay-div h1",{
    opacity: "1",
    delay: 0.2 ,
},'a')
t1.to(".overlay-div",{
    backgroundColor:"#000000b4",
},'a')
t1.to(".scrolling",{
    width:"100%",
},'a')