"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Sparkles,
  MessageCircle,
  LifeBuoy,
} from "lucide-react";


type Props = {

  title:string;

  description:string;

  icon:string;

  gradient:string;

  glow:string;

  delay:number;

};



const icons = {

  business: BriefcaseBusiness,

  custom: Sparkles,

  clarity: MessageCircle,

  support: LifeBuoy,

};



export default function WhyChooseCard({

  title,

  description,

  icon,

  gradient,

  glow,

  delay,

}:Props){


const Icon =
icons[icon as keyof typeof icons] || Sparkles;



return (

<motion.div


initial={{
opacity:0,
y:40,
}}


whileInView={{
opacity:1,
y:0,
}}


viewport={{
once:true,
}}


transition={{
duration:0.6,
delay:delay*0.12,
}}



whileHover={{
y:-10,
scale:1.02,
}}



className="
group
relative
overflow-hidden

rounded-[32px]

border
border-white/10

bg-slate-900/70

p-8

backdrop-blur-xl
"

>





{/* Animated Glow */}


<motion.div


animate={{

scale:[1,1.25,1],

opacity:[0.25,0.55,0.25],

}}



transition={{

duration:5,

repeat:Infinity,

delay,

}}



className={`
absolute

-right-12

-top-12

h-40

w-40

rounded-full

blur-3xl

${glow}

`}


/>







{/* Hover Light */}


<div
className="
absolute
inset-0

bg-gradient-to-br

from-white/0

via-white/[0.03]

to-white/0

opacity-0

transition

duration-500

group-hover:opacity-100
"
/>







{/* Icon */}



<motion.div


animate={{

y:[0,-8,0],

rotate:[0,4,-4,0],

}}



transition={{

duration:4,

repeat:Infinity,

delay:delay*0.3,

ease:"easeInOut",

}}



whileHover={{

scale:1.15,

rotate:0,

}}



className={`

relative

flex

h-16

w-16

items-center

justify-center

rounded-2xl

bg-gradient-to-br

${gradient}

shadow-xl

`}


>


<Icon

className="
h-8
w-8
text-white
"

/>


</motion.div>









<h3

className="
relative

mt-8

text-2xl

font-bold

text-white

transition-colors

duration-300

group-hover:text-cyan-300
"

>

{title}


</h3>







<p

className="
relative

mt-5

leading-8

text-slate-400
"

>

{description}


</p>









<Link
  href="/about"
  className="
    relative
    mt-8
    inline-flex
    items-center
    gap-2
    font-semibold
    text-cyan-400
    transition-all
    duration-300
    group-hover:gap-4
    hover:text-cyan-300
  "
>
  Learn More
  <ArrowRight className="h-4 w-4" />
</Link>







</motion.div>


);

}