import React from "react";
import Layout from "../layouts/Layouts";
import Banner from "../components/Banner";
import Model from "../components/Model";
import Accordion_section from "../components/Accordion_section";

const Home = () => {
  return <Layout>

{/* <!-- banner section start here --> */}
      <Banner/>
    {/* <!-- banner section end here --> */}

{/* Model section */}
  <Model/>
{/* Model section */}
   


    {/* <!-- accordion section start here --> */}
    <Accordion_section/>
    {/* <!-- accordion section end here --> */}
  </Layout>;
};

export default Home;
