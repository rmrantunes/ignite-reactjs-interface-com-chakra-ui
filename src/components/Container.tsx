import { Box, BoxProps } from "@chakra-ui/react";

export type ContainerProps = BoxProps & {
  enablePadding?: boolean;
};

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Box
      maxW={1240}
      marginX="auto"
      {...(props.enablePadding && { px: "10" })}
      {...props}
    >
      {props.children}
    </Box>
  );
};

Container.defaultProps = {
  enablePadding: true,
};
