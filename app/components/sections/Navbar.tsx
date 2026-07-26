"use client";

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
          mt-4
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
              gap-3
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl

                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-indigo-600

                text-xl
                font-black
                text-white

                shadow-lg
                shadow-cyan-500/30
              "
            >
              K
            </div>



            <div
              className="
                hidden
                sm:block
              "
            >

              <h1
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                KoreVity
              </h1>


              <p
                className="
                  text-xs
                  text-slate-400
                "
              >
                Helping Businesses Work Smarter
              </p>


            </div>


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

            <Link href="/contact">
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
    href="/contact"
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