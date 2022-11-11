import { Masters } from "../screens";
import DrawerContent, { DRAWER_WIDTH } from "../Drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: DRAWER_WIDTH,
        },
      }}
    >
      <Drawer.Screen name="Masters" component={Masters} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;