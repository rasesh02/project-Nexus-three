export const containerVariants=(delay=0)=>({
   "offscreen":{
    y:30, // 30px distance from y axis
    opacity: 0,
   },
   "onscreen":{
     opacity:1,
     y:0,   // element returns to its normal position
     transition:{
        type: "spring",
        duration: 2,
        delay
     }
   }
})
export const tagVariants={
   "offscreen":{
    y:10, 
    opacity: 0,
   },
   "onscreen":{
     opacity:1,
     y:0,   
     transition:{
        type: "spring",
        duration: 2,
     }
   }
}

export const titleVariants={
   "offscreen":{
    y:30, 
    opacity: 0,
   },
   "onscreen":{
     opacity:1,
     y:0,   
     transition:{
        type: "spring",
        duration: 2.2,
     }
   }
}

export const desVariants={
   "offscreen":{
    y:20, 
    opacity: 0,
   },
   "onscreen":{
     opacity:1,
     y:0,   
     transition:{
        type: "spring",
        duration: 2.6,
        delay: .2,
     }
   }
}