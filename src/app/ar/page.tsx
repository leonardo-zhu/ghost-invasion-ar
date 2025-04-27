"use client";
import ARCanvas from "./ARCanvas";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import { useMindAR } from "@/hooks/useMindAR";
import { setupTerminal, setupWhiteboard } from "@/scenes";
import { START_MARKER_ID } from "@/constants";

export default function ARPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { loading, registerAnchor, markerStates } = useMindAR(containerRef);

  const [message, setMessage] = useState<string>();

  const [step, setStep] = useState<number>(-1);

  useEffect(() => {
    setupWhiteboard(registerAnchor, setMessage);
    setupTerminal(registerAnchor);
  }, []);


  useEffect(() => {
    // find the first marker that is visible
    const [id] = Array.from(markerStates)
      .find(([, v]) => v) || [-1, false];

    if (id < 0) return;

    setStep(id)

    setMessage(id === START_MARKER_ID ? "👻 你来晚了……这里的数据，不该被发现……" : "")

  }, [markerStates]);

  return (
    <>
      <ARCanvas containerRef={containerRef} loading={loading}/>
      <Message message={message}/>
    </>
  );
}
