import { useEffect } from "react";
import { usePDF } from "react-to-pdf";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";
import AOS from "aos";
import data from "./data/data.json";
import "aos/dist/aos.css";
import "./App.css";
import { Resume } from "./Resume";

function App() {
  const searchParams = new URLSearchParams(document.location.search);
  const isPrintMode = searchParams.get("pdf") === "true";

  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-center",
      duration: 0,
      once: true,
    });
    if (isPrintMode) {
      toPDF();
    }
  }, [isPrintMode]);

  const { toPDF, targetRef } = usePDF({
    filename: `${data.firstName} ${data.lastName}.pdf`,
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            {data.firstName} {data.lastName}
          </title>
        </Helmet>
      </HelmetProvider>
      {!isPrintMode && (
        <Header
          firstName={data.firstName}
          lastName={data.lastName}
          socialMedias={data.socialMedias}
        />
      )}
      <div className="page-content" ref={targetRef}>
        <Resume {...data} />
      </div>
      {!isPrintMode && (
        <Footer
          firstName={data.firstName}
          lastName={data.lastName}
          socialMedias={data.socialMedias}
        />
      )}
    </>
  );
}

export default App;
