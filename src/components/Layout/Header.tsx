import * as React from "react";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";

import { PingcapLogoIcon } from "components/Icons";
import LinkComponent from "components/Link";
import HeaderNavStack, {
  HeaderNavStackMobile,
} from "components/Layout/HeaderNav";
import HeaderAction from "components/Layout/HeaderAction";

import { generatePingcapUrl } from "utils";
import { Locale } from "static/Type";

export default function Header(props: {
  menu?: React.ReactNode;
  locales: Locale[];
  docInfo?: { type: string; version: string };
}) {
  const theme = useTheme();
  const { language, changeLanguage } = useI18next();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.website.m2,
        borderBottom: `1px solid ${theme.palette.website.m4}`,
        boxShadow: `0px 1px 6px rgba(0, 0, 0, 0.08)`,
        height: "5rem",
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          paddingLeft: { md: "2rem" },
          paddingRight: { md: "2rem" },
        }}
      >
        {props.menu}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <LinkComponent to={generatePingcapUrl(language)}>
            <PingcapLogoIcon
              sx={{ width: "6.75rem", display: { xs: "none", sm: "block" } }}
            />
          </LinkComponent>
        </Box>

        <HeaderNavStack />
        <HeaderNavStackMobile />

        <HeaderAction
          supportedLocales={props.locales}
          docInfo={props.docInfo}
        />
      </Toolbar>
    </AppBar>
  );
}
