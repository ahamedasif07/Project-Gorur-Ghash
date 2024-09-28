import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import brandLogo from "../../asstes/gorur-ghash-home/Header-1-102x42.png";

const NabVar = () => {
  return (
    <div>
      <Section>
        <div>
          <Image src={brandLogo} alt="image"></Image>
        </div>
      </Section>
    </div>
  );
};

export default NabVar;
