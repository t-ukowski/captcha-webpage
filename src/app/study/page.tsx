"use client";
import React, { useState } from "react";
import Typography from "../components/typography/Typography";

const Study = () => {
  const [step, setStep] = useState(0);

  // Callback function that updates the step or shows the form link
  const handleCaptchaSolve = () => {
    if (step < 2) {
      setStep(step + 1); // Move to the next CAPTCHA
    } else {
      setStep(step + 1); // Prepare to show the form link
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground p-8 space-y-6">
      <Typography variant="header">
        CAPTCHA nr {Math.min(step + 1, 3)}/3
      </Typography>
      {step < 3 ? (
        <div className="captcha-widget-container">
          {/* Placeholder for CAPTCHA widget */}
          <div
            style={{
              border: "2px solid #ccc",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <p>Tutaj widżet CAPTCHA {step + 1}</p>
            {/* Button to simulate solving the CAPTCHA */}
            <button
              onClick={handleCaptchaSolve}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Solve CAPTCHA
            </button>
          </div>
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
