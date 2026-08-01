"use client";

import {
  Sparkles,
  Send,
  Bot,
  User,
} from "lucide-react";



const messages = [
  {
    role: "ai",
    text: "Hello! I'm your KoreVity AI Assistant. I can help you understand your business performance and identify opportunities.",
  },
  {
    role: "user",
    text: "Why did operational efficiency improve this month?",
  },
  {
    role: "ai",
    text: "Based on your business data, automation workflows reduced repetitive tasks and improved processing speed.",
  },
];



export default function AIAssistant() {


  return (

    <div
      className="
        rounded-3xl

        border
        border-cyan-400/20

        bg-slate-900/60

        p-8

        backdrop-blur-xl
      "
    >


      {/* Header */}

<div
  className="
    flex
    items-start
    justify-between
  "
>

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            bg-cyan-400/20
          "
        >

          <Sparkles
            className="
              h-5
              w-5
              text-cyan-300
            "
          />

        </div>



        <div>

  <h3
    className="
      text-2xl
      font-bold
      text-white
    "
  >
    KoreVity AI Assistant
  </h3>

  <p
    className="
      mt-1
      text-sm
      text-slate-400
    "
  >
    Enterprise Intelligence Assistant
  </p>

</div>
<div
  className="
    flex
    items-center
    gap-2

    rounded-full

    border
    border-emerald-500/20

    bg-emerald-500/10

    px-4
    py-2
  "
>

  <span
    className="
      h-2.5
      w-2.5
      rounded-full
      bg-emerald-400
    "
  />

  <span
    className="
      text-sm
      font-medium
      text-emerald-300
    "
  >
    Connected
  </span>

</div>


      </div>


{/* Suggested Prompts */}

<div
  className="
    mt-8
    flex
    flex-wrap
    gap-3
  "
>

  <button
    className="
      rounded-full
      border
      border-cyan-400/20
      bg-cyan-500/10
      px-4
      py-2
      text-sm
      text-cyan-300
      transition
      hover:bg-cyan-500/20
    "
  >
    📈 Why did revenue increase?
  </button>

  <button
    className="
      rounded-full
      border
      border-white/10
      bg-white/5
      px-4
      py-2
      text-sm
      text-slate-300
      transition
      hover:border-cyan-400/30
    "
  >
    📊 Executive Summary
  </button>

  <button
    className="
      rounded-full
      border
      border-white/10
      bg-white/5
      px-4
      py-2
      text-sm
      text-slate-300
      transition
      hover:border-cyan-400/30
    "
  >
    👥 Customer Insights
  </button>

  <button
    className="
      rounded-full
      border
      border-white/10
      bg-white/5
      px-4
      py-2
      text-sm
      text-slate-300
      transition
      hover:border-cyan-400/30
    "
  >
    📦 Inventory Status
  </button>

</div>


      {/* Chat Area */}

      <div
        className="
          mt-8

          flex
          flex-col
          gap-4

          max-h-[360px]

          overflow-y-auto
        "
      >

        {
          messages.map((message,index)=>(

            <div
              key={index}

              className={`
                flex
                gap-3

                ${
                  message.role === "user"
                  ?
                  "justify-end"
                  :
                  "justify-start"
                }
              `}
            >


              {
                message.role === "ai"
                &&
                <Bot
                  className="
                    mt-1
                    h-5
                    w-5
                    text-cyan-300
                  "
                />
              }



              <div
                className={`
                  max-w-xl

                  rounded-2xl

                  px-5

                  py-3

                  text-sm

                  leading-6

                  ${
                    message.role === "user"
                    ?
                    "bg-cyan-500 text-white"
                    :
                    "border border-white/10 bg-white/5 text-slate-300"
                  }
                `}
              >

                {message.text}

              </div>



              {
                message.role === "user"
                &&
                <User
                  className="
                    mt-1
                    h-5
                    w-5
                    text-slate-300
                  "
                />
              }


            </div>

          ))

        }


      </div>






      {/* Input */}

      <div
        className="
          mt-8

          flex

          gap-3
        "
      >

        <input

          placeholder="Ask your AI assistant..."

          className="
            flex-1

            rounded-2xl

            border
            border-white/10

            bg-white/5

            px-5

            py-3

            text-sm

            text-white

            outline-none

            placeholder:text-slate-500

            focus:border-cyan-400
          "

        />



        <button

          className="
            flex

            items-center

            justify-center

            rounded-2xl

            bg-gradient-to-r

            from-cyan-500

            to-blue-600

            px-5

            text-white

            transition

            hover:scale-105
          "

        >

          <Send
            className="
              h-5
              w-5
            "
          />

        </button>


      </div>



    </div>

  );

}