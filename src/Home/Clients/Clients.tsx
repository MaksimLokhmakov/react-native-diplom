import { StatusBar } from "expo-status-bar";
import { Box } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { useRef, useState } from "react";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import {
  HeaderWithSearch,
  ScrollView,
  SearchResult,
  InfoBox,
} from "../components";
import { useSharedValue } from "react-native-reanimated";

// ? temp
import { clients } from "../utils/temp";

const Clients = ({ navigation }: HomeNavigationProps<"Clients">) => {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const scroll = useRef<GHScrollView>(null);
  const searchResultScrollRef = useRef<GHScrollView>(null);

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const searchData = search
    ? clients.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <StatusBar style="dark" />

      <Box flex={1} backgroundColor="white">
        <HeaderWithSearch
          title="клиенты"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "plus", onPress: () => true }}
          value={search}
          onChangeText={(e) => setSearch(e)}
          onClear={() => setSearch("")}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setTimeout(() => setSearchFocus(false), 200)}
          {...{ x, y }}
        />

        <Box height="100%" zIndex={!searchFocus ? 1 : 0}>
          <ScrollView ref={scroll} {...{ y }}>
            {clients.map(({ name, phone }, index) => (
              <InfoBox
                key={index}
                title={name}
                subtitle={phone}
                simultaneousHandlers={scroll}
                onDelete={() => {}}
              />
            ))}
          </ScrollView>
        </Box>

        <SearchResult
          ref={searchResultScrollRef}
          data={searchData}
          searchValue={search}
          {...{ x }}
        >
          {searchData.map(({ name, phone }, index) => (
            <InfoBox
              key={index}
              title={name}
              subtitle={phone}
              simultaneousHandlers={searchResultScrollRef}
              onDelete={() => {}}
            />
          ))}
        </SearchResult>
      </Box>
    </>
  );
};

export default Clients;
