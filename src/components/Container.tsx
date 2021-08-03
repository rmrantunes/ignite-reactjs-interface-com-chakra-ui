import { Box } from "@chakra-ui/react";

export type ContainerProps = {
  enablePadding?: boolean;
};

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Box maxW={1240} marginX="auto" {...(props.enablePadding && { px: "10" })}>
      {props.children}
    </Box>
  );
};

Container.defaultProps = {
  enablePadding: true,
};
