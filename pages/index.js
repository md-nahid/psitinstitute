import Banner from '../components/Banner';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Mentors from '../components/Mentors';
import Steps from '../components/Steps';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Steps />
      <Mentors />
    </Layout>
  );
}
