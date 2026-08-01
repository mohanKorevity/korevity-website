"use client";

import { useState } from "react";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-3

          rounded-2xl

          border
          border-white/10

          bg-slate-900/60

          px-4
          py-3

          transition

          hover:border-cyan-400/30
        "
      >

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            bg-cyan-400/20

            text-cyan-300
          "
        >
          <User size={18} />
        </div>

        <div className="text-left">

          <p className="text-sm font-semibold text-white">
            Mohan Kumar
          </p>

          <p className="text-xs text-slate-500">
            Administrator
          </p>

        </div>

        <ChevronDown
          size={18}
          className="text-slate-500"
        />

      </button>

      {open && (

        <div
          className="
            absolute
            right-0
            mt-3

            w-60

            rounded-2xl

            border
            border-white/10

            bg-slate-900

            p-2

            shadow-2xl

            z-50
          "
        >

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-white/5">
            <User size={18} />
            Profile
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-white/5">
            <Settings size={18} />
            Settings
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-red-500/10">
            <LogOut size={18} />
            Logout
          </button>

        </div>

      )}

    </div>
  );
}