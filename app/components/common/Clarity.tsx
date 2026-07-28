"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function MicrosoftClarity() {
  useEffect(() => {
    Clarity.init("xtc2vfztp9");
  }, []);

  return null;
}