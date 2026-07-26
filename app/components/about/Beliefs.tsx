"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Database,
  Bot,
  Handshake,
} from "lucide-react";


const beliefs = [
  {
    icon: Lightbulb,
    title: "Technology Should Be Simple",
    description:
      "Technology should remove complexity, not add to it. We design solutions that are intuitive, practical and easy for teams to adopt.",
    gradient:
      "from-yellow-400 via-orange-500 to-red-500",
    glow:
      "bg-orange-500/40",
  },

  {
    icon: Database,
    title: "Data Should Drive Decisions",
    description:
      "Business leaders deserve clear, reliable insights instead of scattered spreadsheets. Better information leads to better decisions.",
    gradient:
      "from-cyan-400 via-blue-500 to-indigo-600",
    glow:
      "bg-blue-500/40",
  },

  {
    icon: Bot,
    title: "Automation Should Save Time",
    description:
      "People create value. Repetitive tasks don't. Automation should free your team to focus on work that actually grows the business.",
    gradient:
      "from-emerald-400 via-green-500 to-teal-600",
    glow:
      "bg-emerald-500/40",
  },

  {
    icon: Handshake,
    title: "Partnerships Matter",
    description:
      "We don't see ourselves as vendors. We aim to become a long-term technology partner that supports your business as it evolves.",
    gradient:
      "from-purple-400 via-pink-500 to-rose-500",
    glow:
      "bg-purple-500/40",
  },
];


export default function Beliefs() {

return (

<section className="relative py-36">


<div className="mx-auto max-w-7xl px-8">


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="mx-auto max-w-4xl text-center"

>


<span className="
inline-flex
rounded-full
border
border-cyan-500/20
bg-cyan-500/10
px-5
py-2
text-sm
font-semibold
tracking-[0.18em]
text-cyan-300
">

OUR BELIEFS

</span>



<h2 className="
mt-8
text-5xl
font-black
text-white
lg:text-6xl
">


What Guides


<span className="
mt-3
block
bg-gradient-to-r
from-cyan-300
via-white
to-blue-400
bg-clip-text
text-transparent
">

Everything We Build.

</span>


</h2>


</motion.div>





<div className="
mt-24
grid
gap-8
md:grid-cols-2
">


{
beliefs.map((belief,index)=>{


const Icon = belief.icon;


return (

<motion.div

key={belief.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
delay:index*.12
}}


whileHover={{
y:-12
}}


className="
group
relative
overflow-hidden
rounded-[32px]
border
border-white/10
bg-slate-900/70
p-10
backdrop-blur-xl
transition-all
duration-500
hover:border-cyan-400/30
"


>


<div className={`
absolute
-right-20
-top-20
h-56
w-56
rounded-full
blur-3xl
opacity-40
transition
duration-700
group-hover:opacity-80
${belief.glow}
`}


/>



<motion.div

animate={{
y:[0,-10,0],
rotate:[0,3,0]
}}

transition={{
duration:5,
repeat:Infinity,
ease:"easeInOut"
}}

className={`
relative
flex
h-20
w-20
items-center
justify-center
rounded-3xl
bg-gradient-to-br
${belief.gradient}
shadow-2xl
`}

>

<Icon className="
h-10
w-10
text-white
"/>


</motion.div>





<h3 className="
mt-8
text-3xl
font-bold
text-white
">

{belief.title}

</h3>




<p className="
mt-5
text-lg
leading-8
text-slate-400
">

{belief.description}

</p>



</motion.div>


)


})

}



</div>


</div>


</section>

);

}