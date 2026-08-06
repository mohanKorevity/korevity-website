"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";


const comparisons = [
  {
    typical: "Technology first",
    korevity: "Business problem first",
  },
  {
    typical: "One-size-fits-all systems",
    korevity: "Solutions designed around your workflows",
  },
  {
    typical: "Disconnected tools and platforms",
    korevity: "KORTEX connects knowledge, data and operations",
  },
  {
    typical: "More software. More complexity.",
    korevity: "Connected systems. Simpler operations.",
  },
  {
    typical: "Project delivered. Relationship ends.",
    korevity: "Continuous improvement after launch",
  },
  {
    typical: "Technology for technology's sake",
    korevity: "Technology tied to measurable business value",
  },
];


export default function WhyKoreVity() {

return (

<section className="relative py-36 overflow-hidden">


{/* Background Glow */}

<motion.div

animate={{
scale:[1,1.2,1],
opacity:[0.3,0.6,0.3],
}}

transition={{
duration:8,
repeat:Infinity,
}}

className="
absolute
left-1/2
top-20
h-[500px]
w-[500px]
-translate-x-1/2
rounded-full
bg-cyan-500/10
blur-[160px]
"

/>



<div className="relative mx-auto max-w-7xl px-6 lg:px-8">



{/* Heading */}

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
duration:.7,
}}

className="mx-auto max-w-4xl text-center"

>


<span
className="
inline-flex
items-center
gap-2
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

<Sparkles className="h-4 w-4"/>

WHY KOREVITY

</span>




<h2
className="
mt-8
text-5xl
font-black
text-white
lg:text-6xl
"
>

Technology Is What We Build.


<span
className="
mt-3
block
bg-gradient-to-r
from-cyan-300
via-white
to-blue-400
bg-clip-text
text-transparent
"
>

Business Is What We Improve.

</span>


</h2>



<p
  className="
    mx-auto
    mt-8
    max-w-3xl
    text-xl
    leading-9
    text-rose-300
  "
>
  We believe technology is only valuable when it improves how a business operates.

  KoreVity brings KORTEX, connected systems, automation and business intelligence together around your workflows — not as separate tools, but as one coordinated operating environment.
</p>


</motion.div>





{/* Comparison Card */}



<motion.div

initial={{
opacity:0,
y:50,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

transition={{
duration:.8,
delay:.2,
}}

className="
relative
mt-24
overflow-hidden
rounded-[40px]
border
border-white/10
bg-slate-900/70
backdrop-blur-2xl
shadow-2xl
"

>



<div
className="
absolute
inset-x-0
top-0
h-px
bg-gradient-to-r
from-transparent
via-cyan-400
to-transparent
"
/>





{/* Headers */}



<div
className="
grid
grid-cols-2
border-b
border-white/10
"
>


<div
className="
p-8
text-center
"
>

<h3
className="
text-xl
font-bold
text-slate-300
lg:text-2xl
"
>

Others

</h3>

</div>



<div
className="
border-l
border-white/10
bg-gradient-to-br
from-cyan-500/10
to-blue-500/10
p-8
text-center
"
>


<h3
className="
text-xl
font-bold
text-cyan-300
lg:text-2xl
"
>

KoreVity

</h3>


</div>


</div>





{/* Rows */}



{
comparisons.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
x:-20,
}}

whileInView={{
opacity:1,
x:0,
}}

viewport={{
once:true,
}}

transition={{
delay:index*.08,
}}

whileHover={{
scale:1.01,
}}

className="
grid
grid-cols-2
border-b
border-white/5
last:border-none
transition
"

>


{/* Old Way */}


<div
className="
flex
items-start
gap-4
p-7
lg:p-8
"
>


<motion.div

whileHover={{
rotate:15,
}}

>

<XCircle
className="
mt-1
h-6
w-6
text-rose-400
"
/>

</motion.div>


<span
className="
text-base
leading-7
text-slate-300
lg:text-lg
"
>

{item.typical}

</span>


</div>






{/* KoreVity */}



<div
className="
flex
items-start
gap-4
border-l
border-white/10
bg-cyan-500/[0.03]
p-7
lg:p-8
"
>


<motion.div

animate={{
y:[0,-3,0],
}}

transition={{
duration:3,
repeat:Infinity,
}}

>


<CheckCircle2
className="
mt-1
h-6
w-6
text-emerald-400
"
/>


</motion.div>



<span
className="
text-base
leading-7
font-medium
text-white
lg:text-lg
"
>

{item.korevity}

</span>



</div>



</motion.div>


))

}



</motion.div>



</div>


</section>

);

}