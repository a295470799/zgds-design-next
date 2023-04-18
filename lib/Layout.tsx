import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Head from "next/head";

const StyledLayout = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  & .zgds-layout-container {
    flex: auto;
  }
`;

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children, title = "ZGDS", keywords = "", description = "" } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={`${keywords}`} />
        <meta name="description" content={`${description}`} />
      </Head>
      <StyledLayout>
        <Header />
        <Container className="zgds-layout-container" maxWidth="lg">
          {children}
        </Container>
        <Footer />
      </StyledLayout>
    </>
  );
};

export default Layout;
