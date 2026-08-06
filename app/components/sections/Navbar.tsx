"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import GlowButton from "../ui/GlowButton";


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);



  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
  name: "Solutions",
  href: "/solutions",
},
{
  name: "Platform",
  href: "/platform",
},
{
  name: "Industries",
  href: "/industries",
},
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];



  return (

    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
      "
    >

      <div
        className="
          mx-auto
          mt-0
          max-w-7xl
          px-6
        "
      >

        <nav
          className={`
            relative
            flex
            items-center
            justify-between
h-25
            rounded-2xl

            border

            bg-slate-950/80

            backdrop-blur-2xl

            transition-all
            duration-500


            ${
              scrolled
              ?
              "border-cyan-500/20 px-6 py-3 shadow-2xl shadow-cyan-500/10"
              :
              "border-white/10 px-8 py-5"
            }

          `}
        >


          {/* LOGO */}

          <Link
            href="/"
            className="
  flex
  items-center
"
          >

            <Image
  src="/logo/KoreVity_Logo_Dark_Transparent.png"
  alt="KoreVity Logo"
  width={250}
  height={100}
  priority
  className="h-20 w-auto"
/>



            


          </Link>






          {/* DESKTOP NAV */}

          <div
            className="
              hidden
              items-center
              gap-10
              lg:flex
            "
          >

            {
              navigation.map((item)=>(

                <Link

                  key={item.name}

                  href={item.href}

                  className={`

                    relative

                    text-[17px]
                    font-semibold

                    transition-all
                    duration-300


                    ${
                      pathname === item.href
                      ?
                      "text-cyan-300"
                      :
                      "text-slate-300 hover:text-white"
                    }


                    after:absolute
                    after:left-0
                    after:-bottom-2

                    after:h-[2px]

                    after:rounded-full

                    after:bg-cyan-400

                    after:transition-all
                    after:duration-300


                    ${
                      pathname === item.href
                      ?
                      "after:w-full"
                      :
                      "after:w-0 hover:after:w-full"
                    }

                  `}
                >

                  {item.name}

                </Link>

              ))
            }


          </div>







         {/* DESKTOP CTA */}

<div
  className="
    hidden
    lg:block
  "
>
  <Link
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <GlowButton>
    Book Strategy Call
  </GlowButton>
</Link>
</div>







          {/* MOBILE MENU BUTTON */}

          <button

            onClick={() =>
              setMobileOpen(!mobileOpen)
            }

            className="
              rounded-xl
              border
              border-white/10
              p-3
              text-white
              lg:hidden
            "
          >

            {
              mobileOpen
              ?
              <X className="h-6 w-6"/>
              :
              <Menu className="h-6 w-6"/>
            }


          </button>



        </nav>









        {/* MOBILE MENU */}



        {
          mobileOpen && (

            <div
              className="
                mt-3
                rounded-2xl
                border
                border-white/10

                bg-slate-950/95

                p-6

                backdrop-blur-xl

                lg:hidden
              "
            >


              <div
                className="
                  flex
                  flex-col
                  gap-5
                "
              >


                {
                  navigation.map((item)=>(

                    <Link

                      key={item.name}

                      href={item.href}

                      onClick={() =>
                        setMobileOpen(false)
                      }

                      className={`

                        text-lg
                        font-medium


                        ${
                          pathname === item.href
                          ?
                          "text-cyan-300"
                          :
                          "text-slate-300"
                        }

                      `}
                    >

                      {item.name}

                    </Link>


                  ))
                }




                <div className="pt-4">

  <Link
    href="https://calendly.com/mohan-korevity/30min"
target="_blank"
rel="noopener noreferrer"
    onClick={() => setMobileOpen(false)}
  >
    <GlowButton>
      Book Strategy Call
    </GlowButton>
  </Link>

</div>



              </div>


            </div>

          )
        }



      </div>


    </header>

  );
}