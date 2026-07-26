"use client";

import { motion } from "framer-motion";

import FadeIn from "../ui/FadeIn";
import GlassCard from "../ui/GlassCard";

import {
  Eye,
  Workflow,
  Network,
  TrendingUp,
} from "lucide-react";



const stats = [

  {
    title:"Real-Time",
    label:"Business Visibility",
    description:
      "See what is happening across your business with clearer insights.",

    icon:Eye,

    gradient:
      "from-cyan-400 via-blue-500 to-indigo-600",

    glow:
      "bg-cyan-500/40",
  },


  {
    title:"Automated",
    label:"Everyday Workflows",
    description:
      "Reduce repetitive work and improve operational efficiency.",

    icon:Workflow,

    gradient:
      "from-emerald-400 via-green-500 to-teal-600",

    glow:
      "bg-emerald-500/40",
  },


  {
    title:"Connected",
    label:"Business Systems",
    description:
      "Bring your tools and information together seamlessly.",

    icon:Network,

    gradient:
      "from-purple-400 via-fuchsia-500 to-indigo-600",

    glow:
      "bg-purple-500/40",
  },


  {
    title:"Actionable",
    label:"Business Insights",
    description:
      "Turn data into decisions that move your business forward.",

    icon:TrendingUp,

    gradient:
      "from-orange-400 via-red-500 to-pink-600",

    glow:
      "bg-orange-500/40",
  },

];



export default function Stats() {


return (

<section
className="
relative
overflow-hidden

bg-slate-950

py-28
"
>


<div className="mx-auto max-w-7xl px-6">



<div
className="
grid

gap-8

md:grid-cols-2

lg:grid-cols-4
"
>


{
stats.map((item,index)=>{


const Icon = item.icon;



return (

<FadeIn

key={item.label}

delay={index*0.15}

>


<motion.div

whileHover={{
y:-10,
scale:1.03,
}}

transition={{
duration:0.35,
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


{/* glow */}


<motion.div

animate={{
scale:[1,1.3,1],
opacity:[0.25,0.55,0.25],
}}

transition={{
duration:5,
repeat:Infinity,
delay:index,
}}

className={`
absolute

-right-12

-top-12

h-40

w-40

rounded-full

blur-3xl

${item.glow}
`}

/>







{/* icon */}


<motion.div

animate={{
y:[0,-8,0],
rotate:[0,4,-4,0],
}}

transition={{
duration:4,
repeat:Infinity,
delay:index*0.3,
ease:"easeInOut",
}}

className={`
relative

mx-auto

flex

h-16

w-16

items-center

justify-center

rounded-2xl

bg-gradient-to-br

${item.gradient}

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

className={`
relative

mt-8

text-center

text-3xl

font-black

tracking-tight

bg-gradient-to-r

${item.gradient}

bg-clip-text

text-transparent

sm:text-4xl
`}

>

{item.title}

</h3>








<p

className="
mt-4

text-center

text-base

font-semibold

text-white

"

>

{item.label}

</p>







<p

className="
mt-3

text-center

text-sm

leading-6

text-slate-400
"

>

{item.description}

</p>







<div
className={`
absolute

bottom-0

left-0

h-[2px]

w-0

bg-gradient-to-r

${item.gradient}

transition-all

duration-700

group-hover:w-full
`}
/>






</motion.div>


</FadeIn>


);


})

}



</div>



</div>


</section>


);

}