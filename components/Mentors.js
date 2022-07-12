import Container from './Container';
import useApi from '../hooks/useApi';
import MentorCard from './MentorCard';

export default function Mentors() {
  const { isError, data, isLoading } = useApi('/api/mentors');
  return (
    <section className="my-20">
      <header className="text-center">
        <p className="capitalize text-red-500 text-lg">all our teachers</p>
        <h2 className="text-4xl font-semibold mt-2 text-slate-700 uppercase">Our Mentors</h2>
      </header>
      <div className="pt-20">
        <Container flex={true} center={true}>
          {isError && <p>Something went wrong...</p>}
          {isLoading && <p>Loading...</p>}
          {data && <MentorCard data={data} />}
        </Container>
      </div>
    </section>
  );
}
