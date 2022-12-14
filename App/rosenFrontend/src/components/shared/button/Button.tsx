import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const red = {
  500: "#FF0000",
};

const ExampleButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${red[500]};
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${red[500]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${red[500]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const GeneralButton = ({
  onClick,
  border,
  color,
  children,
  height,
  radius,
  width,
  background,
  padding,
}: any): React.ReactElement => {
  return (
    <Button
      onClick={onClick}
      style={{
        background: background,
        padding: padding,
        color: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </Button>
  );
};
// props={undefined} defaultComponent={"button"}
export default GeneralButton;

// export default function SimpleButton() {
//   return (
//     <Stack spacing={2} direction="row">
//       <CustomButton>Button</CustomButton>
//       {/* <CustomButton disabled>Disabled</CustomButton> */}
//     </Stack>
//   );
// }
