import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import NextImg from "#/lib/NextImg";

const StyledFooter = styled("div")`
  width: 100%;
  background: ${(props) => props.theme.palette.background.paper};
  padding: 30px 0 10px;
`;

const StyledBrand = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 100px;
`;

const StyledOur = styled("div")`
  font-size: 1.4rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.text.secondary};
`;

const StyledLine = styled("span")`
  display: inline-block;
  width: 2px;
  height: 8px;
  background: ${(props) => props.theme.palette.text.secondary};
  border-radius: 6px;
  margin: 0 12px;
`;

const StyledCopyright = styled("div")`
  font-size: 1.4rem;
  color: ${(props) => props.theme.palette.text.secondary};
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container sx={{ backgroundColor: (theme) => theme.palette.background.paper }}>
        <StyledBrand>
          <Link href="https://www.songmics.com">
            <NextImg src="/image/footer/songmics.png" alt="songmics" width={210} height={20} />
          </Link>
          <Link href="https://www.vasagle.com">
            <NextImg src="/image/footer/vasagle.png" alt="vasagle" width={90} height={28} />
          </Link>
          <Link href="https://www.feandrea.com">
            <NextImg src="/image/footer/feandrea.png" alt="feandrea" width={87} height={28} />
          </Link>
        </StyledBrand>
        <StyledOur>
          <Link href="/about-us" color="text.paimary">
            About us
          </Link>
          <StyledLine />
          <Link href="/contact-us" color="text.paimary">
            Contact us
          </Link>
        </StyledOur>
        <StyledCopyright>Copyright © {new Date().getFullYear()} EUZIEL International GmbH All Rights Reserved.</StyledCopyright>
      </Container>
    </StyledFooter>
  );
}
