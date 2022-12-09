import Layout from '@/components/common/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer';

const PageLayout = ({ children }) => {
  return (
    <Layout
      header={<Header />}
      footer={<Footer />}
    >
      {children}
    </Layout>
  );
}


export default PageLayout;