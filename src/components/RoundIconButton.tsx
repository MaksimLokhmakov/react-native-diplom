import { RectButton } from "react-native-gesture-handler";
import RoundIcon, { RoundIconProps } from "./RoundIcon";

interface RoundIconButtonProps extends RoundIconProps {
  onPress: () => void;
}

const RoundIconButton = ({ onPress, ...props }: RoundIconButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundIcon {...props} />
    </RectButton>
  );
};

export default RoundIconButton;