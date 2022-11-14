import { Box } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";

export type RoundIconName =
  | "check"
  | "lock"
  | "x"
  | "user"
  | "users"
  | "book-open"
  | "bar-chart-2"
  | "clock"
  | "settings"
  | "arrow-left"
  | "menu"
  | "plus"
  | "phone"
  | "trash-2";
export interface RoundIconProps {
  size: number;
  iconSize?: number;
  name: RoundIconName;
  color: string;
  backgroundColor: string;
}

const RoundIcon = ({
  name,
  color,
  backgroundColor,
  size,
  iconSize,
}: RoundIconProps) => {
  return (
    <Box
      width={size}
      height={size}
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor, borderRadius: size / 2 }}
    >
      <Icon size={iconSize ? iconSize : size * 0.75} {...{ name, color }} />
    </Box>
  );
};

export default RoundIcon;
