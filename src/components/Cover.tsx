import { Box, BoxProps } from "@chakra-ui/react";

type RequiredCoverProps = Required<Pick<BoxProps, "aria-label" | "bgImage">>;

type CoverProps = BoxProps & RequiredCoverProps;

export const Cover = (props: CoverProps) => {
  return (
    <Box
      bgSize="cover"
      bgPosition="center center"
      bgRepeat="no-repeat"
      {...props}
    />
  );
};
