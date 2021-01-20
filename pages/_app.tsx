import React, {FormEvent, useState} from "react";
import {AppProps} from "next/app";
import {useRouter} from "next/router";
import {ChakraProvider, Stack, Image, Box, Input, IconButton} from "@chakra-ui/react";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const goHome = () => {
    router.push(`/?q=${query}`);
  };

  const handleSubmit = (event: FormEvent<HTMLDivElement> | FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setQuery(event.target["query"].value);
    router.push(router.pathname + `?q=${event.target["query"].value}`);
  };

  return (
    <ChakraProvider>
      <Stack>
        <Stack
          align="center"
          backgroundColor="gray.500"
          direction="row"
          padding="3"
          position="fixed"
          width="100%"
          zIndex={999}
        >
          <Image cursor="pointer" src="/logo.png" width="12" onClick={goHome} />
          <Box as="form" width="100%" onSubmit={handleSubmit}>
            <Stack direction="row" spacing={0} width="100%">
              <Input backgroundColor="white" name="query" placeholder="Search" roundedRight={0} />
              <IconButton
                aria-label="search-button"
                icon={<img src="https://icongr.am/feather/search.svg?size=12&color=black" />}
                roundedLeft={0}
              />
            </Stack>
          </Box>
        </Stack>
        <Box marginTop="4.5rem !important">
          <Component {...pageProps} query={query} />
        </Box>
      </Stack>
    </ChakraProvider>
  );
};

export default App;
