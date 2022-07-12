import Image from 'next/image';
import Button from './Button';

export default function MentorCard({ data }) {
  return (
    <>
      {data.map((d) => (
        <div key={d.id} className="text-center p-2 shadow max-w-[300px] w-full mx-5">
          <div className="relative">
            <Image
              priority="low"
              src={d.picPath}
              alt={d.name}
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="py-5">
            <h4 className="text-lg capitalize font-semibold">{d.name}</h4>
            <p className="capitalize mb-5">{d.expert}</p>
            <Button label="View Details" />
          </div>
        </div>
      ))}
    </>
  );
}
