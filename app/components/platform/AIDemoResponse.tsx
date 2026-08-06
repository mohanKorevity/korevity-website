"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  current: any;
  thinking: boolean;
  thinkingSteps: string[][];
  activeDemo: number;
};

export default function AIDemoResponse({
  current,
  thinking,
  thinkingSteps,
  activeDemo,
}: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [visibleBullets, setVisibleBullets] = useState(0);
  const [animationStage, setAnimationStage] = useState(0);
  
useEffect(() => {
  if (thinking) return;

  setTypedTitle("");
  setShowCursor(true);
setVisibleBullets(0);
setAnimationStage(0);
  let i = 0;

  const title = current.answer.title;

  const interval = setInterval(() => {
    i++;

    setTypedTitle(title.slice(0, i));

    if (i >= title.length) {
    clearInterval(interval);
    setShowCursor(false);

    setVisibleBullets(0);

    current.answer.body.forEach((_: string, index: number) => {
      setTimeout(() => {
        setVisibleBullets(index + 1);
      }, index * 350);
    });
    setTimeout(() => {
  setAnimationStage(1);
}, current.answer.body.length * 350 + 200);

setTimeout(() => {
  setAnimationStage(2);
}, current.answer.body.length * 350 + 500);
}
  }, 35);

  return () => clearInterval(interval);
}, [thinking, current]);
useEffect(() => {
  if (!thinking) return;

  setStepIndex(0);

  thinkingSteps[activeDemo].forEach((_, i) => {
    setTimeout(() => {
      setStepIndex(i);
    }, i * 450);
  });
}, [thinking, activeDemo, thinkingSteps]);
  return (
    <>
      {thinking ? (
        <div className="py-8">
          <p className="font-semibold text-cyan-300">
  KORTEX
</p>

<p className="mt-1 text-xs text-slate-500">
  Enterprise Intelligence Engine
</p>

          <div className="mt-8 space-y-4">
            {thinkingSteps[activeDemo].map((step, index) => (
              <div
                key={`thinking-${activeDemo}-${index}`}
                className="flex items-center gap-3"
              >
                {index < stepIndex ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                    ✓
                  </div>
                ) : index === stepIndex ? (
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
                ) : (
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                )}

                <span
                  className={
                    index <= stepIndex
                      ? "text-slate-200"
                      : "text-slate-500"
                  }
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <motion.div
  key={current.question}
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35 }}
  className="space-y-6"
>
  
  <div className="mb-6 border-b border-white/10 pb-5">

  <div className="flex items-center justify-between">

    <div>

      <p className="text-xs tracking-[0.18em] text-cyan-300">
        KORTEX
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Enterprise Intelligence Engine
      </p>

    </div>

    <div className="text-right">

  <div className="flex items-center justify-end gap-2">

    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

    <span className="text-xs text-emerald-400">
      Analysis Complete
    </span>

  </div>

  <p className="mt-1 text-xs text-slate-500">
    Confidence
    <span className="ml-2 font-semibold text-cyan-300">
      {current.answer.confidence}%
    </span>
  </p>

</div>

  </div>

  <p className="mt-6 text-xl font-semibold text-white">

    {typedTitle}

    {showCursor && (
      <span className="animate-pulse">|</span>
    )}

  </p>

</div>
{!showCursor && current.answer.intro && (
  <motion.p
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className="text-slate-300 leading-7"
  >
    {current.answer.intro}
  </motion.p>
)}
  <div className="mt-6 space-y-4">
   {current.answer.body
  .slice(0, visibleBullets)
  .map((item: string, index: number) => (
    <motion.div
      key={`bullet-${activeDemo}-${index}`}
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-3"
    >
      <div className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />

      <p className="text-slate-300">
        {item}
      </p>
    </motion.div>
))}
  </div>

  <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{
    opacity: animationStage >= 1 ? 1 : 0,
    y: animationStage >= 1 ? 0 : 15,
  }}
  transition={{ duration: 0.35 }}
  className="mt-8"
>
  <p className="text-xs tracking-[0.18em] text-cyan-300">
    RECOMMENDED ACTION
  </p>

  <p className="mt-2 text-slate-300">
    {current.answer.recommendation}
  </p>
</motion.div>

  <motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: animationStage >= 2 ? 1 : 0,
  }}
  transition={{ duration: 0.35 }}
  className="mt-8"
>
  <p className="text-xs tracking-[0.18em] text-slate-500">
    CONNECTED SOURCES
  </p>

    <div className="mt-4 flex flex-wrap gap-3">
  {current.answer.sources.map((source: string, index: number) => (
    <motion.span
      key={`source-${activeDemo}-${index}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: animationStage >= 2 ? 1 : 0,
        scale: animationStage >= 2 ? 1 : 0.9,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.25,
      }}
      className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
    >
      <div className="h-2 w-2 rounded-full bg-emerald-400" />

      {source}
    </motion.span>
  ))}
</div>
</motion.div>
</motion.div>
      )}
    </>
  );
}