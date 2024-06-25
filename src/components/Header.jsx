import React from "react";
import MaskGroupImage from "./../assets/images/Header_Mask_group.png";
import VectorImage from "./../assets/images/Header_Vector.png";
import { styled } from "@mui/material/styles";

const Header1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: "auto"
});

const Group87 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `228px`,
  height: `52px`
});

const Group28 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `166px`,
  height: `52px`,
  left: `62px`,
  top: `0px`
});

const HiRasyad = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 65, 58, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
}));

const StartSortingYourWast = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(150, 198, 187, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `31px`
}));

const MaskGroup = styled("img")({
  height: `50px`,
  width: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `1px`
});

const Frame30 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `14px`,
  boxSizing: `border-box`,
  overflow: `hidden`
});

const Bell = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px`,
  overflow: `hidden`
});

const Vector = styled("img")({
  height: `19.2px`,
  width: `16.8px`,
  position: `absolute`,
  left: `4px`,
  top: `2px`
});

function Header(props) {
  return (
    <Header1 className={props.className}>
      <Group87>
        <Group28>
          <HiRasyad>{`Hi, Rasyad`}</HiRasyad>
          <StartSortingYourWast>
            {`Start sorting your waste`}
          </StartSortingYourWast>
        </Group28>
        <MaskGroup src={MaskGroupImage} loading="lazy" alt={"Mask group"} />
      </Group87>
      <Frame30>
        <Bell>
          <Vector src={VectorImage} loading="lazy" alt={"Vector"} />
        </Bell>
      </Frame30>
    </Header1>
  );
}

export default Header;
