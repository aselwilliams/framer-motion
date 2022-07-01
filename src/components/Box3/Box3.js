
import {motion} from 'framer-motion'

function Box3() {
 const boxVariant={
     hidden:{
         x:'-100vw'
     },
     visible:{
         x:0,
         transition:{
             delay:0.5,
             staggerChildren:0.2,
            //  when:'beforeChildren'    
         }
     }
 }
 const listVariant={
    hidden:{
        x:-10,
        opacity:0
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            delay:1
        }
    }
 }
  return (
    <div className='box-container'>
        <motion.div className='box' variants={boxVariant} initial='hidden' animate='visible' >
            {[1,2,3,4].map(box=>{
                return (<motion.li className='boxItem' variants={listVariant} initial='hidden' animate='visible'></motion.li>)
            })}
        </motion.div>
       
    </div>
  )
}

export default Box3