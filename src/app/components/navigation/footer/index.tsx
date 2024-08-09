"use client";
import React from "react";
import Typography from "../../typography/Typography";
// import { Button } from '@nextui-org/react';

const Footer = () => {
  return (
    <div className="bg-primary-200 flex flex-col items-center pt-6">
      <Typography variant="footer" className="mt-1 pb-1">
        Projekt kodu CAPTCHA i praca dyplomowa autorstwa Tomasza Ukowskiego
      </Typography>
    </div>
  );
};

export default Footer;
