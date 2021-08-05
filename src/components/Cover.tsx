import { Box, BoxProps } from "@chakra-ui/react";

type RequiredCoverProps = Required<Pick<BoxProps, "aria-label" | "bgImage">>;

type CoverProps = BoxProps &
  RequiredCoverProps & {
    darken?: boolean;
  };

export const Cover = (props: CoverProps) => {
  const darken = props.darken && {
    bgBlendMode: "darken",
  };

  return (
    <Box
      bgSize="cover"
      bgPosition="center center"
      bgRepeat="no-repeat"
      bgColor="rgba(0,0,0,0.3)"
      {...darken}
      {...props}
    />
  );
};
