import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import theme, { Box, Text } from "../Theme";
import { Feather as Icon } from "@expo/vector-icons";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <BorderlessButton onPress={onChange}>
      <Box flexDirection="row">
        <Box
          height={20}
          width={20}
          marginRight="s"
          alignItems="center"
          justifyContent="center"
          borderRadius="s"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" size={16} color={theme.colors.white} />
        </Box>

        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
