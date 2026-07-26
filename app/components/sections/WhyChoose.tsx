"use client";

import { motion } from "framer-motion";
import WhyChooseCard from "./WhyChooseCard";


const reasons = [

  {
    title:"Business First",

    description:
      "We don't start with technology. We start by understanding how your business works and where improvements create the biggest impact.",

    icon:"business",

    gradient:
      "from-cyan-400 via-blue-500 to-indigo-600",

    glow:
      "bg-cyan-500/40",
  },


  {
    title:"Solutions Built Around You",

    description:
      "Every business is different. Your systems, dashboards and automations are designed specifically for your workflows.",

    icon:"custom",

    gradient:
      "from-purple-400 via-fuchsia-500 to-indigo-600",

    glow:
      "bg-purple-500/40",
  },


  {
    title:"Clear, Practical Advice",

    description:
      "No confusing technical jargon. We explain everything in plain English so you always understand what's being built.",

    icon:"clarity",

    gradient:
      "from-emerald-400 via-green-500 to-teal-600",

    glow:
      "bg-emerald-500/40",
  },


  {
    title:"Continuous Improvement",

    description:
      "Your business keeps changing, so we continue refining your systems and finding new opportunities to improve.",

    icon:"support",

    gradient:
      "from-orange-400 via-red-500 to-pink-600",

    glow:
      "bg-orange-500/40",
  },

];



export default function WhyChoose() {

return (

<section className="relative py-36">


<div
className="
mx-auto

grid

max-w-7xl

gap-20

px-8

lg:grid-cols-[0.9fr_1.1fr]
"
>





{/* LEFT */}



<motion.div


initial={{
opacity:0,
x:-40,
}}


whileInView={{
opacity:1,
x:0,
}}


viewport={{
once:true,
}}


transition={{
duration:0.6,
}}

>


<span
className="
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
"
>
WHY KOREVITY
</span>





<h2
className="
mt-8

text-5xl

font-black

leading-tight

text-white

lg:text-6xl
"
>

Technology Should

<br />

Make Business

<br />


<span
className="
bg-gradient-to-r

from-cyan-300

via-white

to-blue-400

bg-clip-text

text-transparent
"
>
Simpler.
</span>


</h2>







<p
className="
mt-8

text-xl

leading-9

text-slate-400
"
>

We believe technology should remove complexity,
not create more of it.

<br />
<br />

That's why every solution we build is designed
around your business, your people and your goals.

</p>



</motion.div>









{/* RIGHT CARDS */}



<div
className="
grid

gap-8

md:grid-cols-2
"
>


{
reasons.map((reason,index)=>(


<WhyChooseCard


key={reason.title}


title={reason.title}


description={reason.description}


icon={reason.icon}


gradient={reason.gradient}


glow={reason.glow}


delay={index}


/>


))

}



</div>






</div>


</section>


);

}