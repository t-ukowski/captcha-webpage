"use client";
import React, { useState, useEffect } from "react";
import Typography from "../components/typography/Typography";
import useMediaQuery from "../hooks/useMediaQuery";

interface CaptchaSolveEventDetail {
  token: string;
}

const Study = () => {
  const [step, setStep] = useState(0);
  const [token, setToken] = useState("");
  const [captchaLoaded, setCaptchaLoaded] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (step >= 3) return; // If three CAPTCHAs have been solved, stop loading new ones.

    const loadCaptchaScript = () => {
      const script = document.createElement("script");
      script.src = "https://t-ukowski.github.io/captcha-widget/widget.js";
      script.async = true;
      script.onload = () => {
        console.log("Captcha script loaded successfully.");
        setCaptchaLoaded(true);
      };
      script.onerror = () => {
        console.error("Error loading the captcha script.");
        setCaptchaLoaded(false);
      };

      document.body.appendChild(script);

      return script;
    };

    const script = loadCaptchaScript();

    const handleCaptchaSolve = (event: Event) => {
      const customEvent = event as CustomEvent<CaptchaSolveEventDetail>;
      setToken(customEvent.detail.token);
      setStep((prevStep) => prevStep + 1);
      // Remove the script and clean up after each CAPTCHA is solved
      document.body.removeChild(script);
      setCaptchaLoaded(false); // Ensure captcha is reloaded
    };

    window.addEventListener(
      "captchaSolved",
      handleCaptchaSolve as EventListener
    );

    return () => {
      window.removeEventListener(
        "captchaSolved",
        handleCaptchaSolve as EventListener
      );
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [step]); // Re-run this effect whenever `step` changes

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground p-4 md:p-8 space-y-3 md:space-y-6">
      <Typography variant={isMobile ? "subheader" : "header"}>
        CAPTCHA nr {Math.min(step + 1, 3)}/3
      </Typography>
      {step < 3 ? (
        <div className="captcha-widget-container">
          {!captchaLoaded && <p>Ładowanie testu CAPTCHA...</p>}
          <div
            style={{
              border: "2px solid #ccc",
              padding: "20px",
              textAlign: "center",
            }}
            id="captcha" // This element must exist for the CAPTCHA script to attach itself
          ></div>
          <p>{`Token: ${token}`}</p>
        </div>
      ) : (
        <div className="form-link-container">
          <p>
            A teraz wypełnij{" "}
            <a
              href="https://forms.gle/7yGQrpEGwEjREz1o6"
              className="text-primary"
            >
              formularz {">"}
              {">"}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Study;
