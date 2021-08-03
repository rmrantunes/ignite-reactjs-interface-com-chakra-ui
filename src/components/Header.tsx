import Image from "next/image";
import { Center, useBreakpointValue } from "@chakra-ui/react";

import logoImg from "../../public/logo.svg";

export default function Header() {
  const logoWidth = useBreakpointValue({
    base: 128,
    lg: 185,
  });

  return (
    <Center p={{ base: "4", lg: "7" }}>
      <Image src={logoImg} alt="worldtrip" width={logoWidth} />
    </Center>
  );
}
