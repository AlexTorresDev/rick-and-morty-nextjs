import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { GetLocationById } from '../../domain/usecases/GetLocationById';
import { Location } from '../../domain/entities/Location';
import { LocationRepositoryAPI } from '@/infrastructure/repositories/LocationRepositoryAPI';

interface LocationProps {
  location: Location;
}

export default function LocationPage({ location }: LocationProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">{location.name}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold">Type:</p>
            <p>{location.type}</p>
          </div>
          <div>
            <p className="font-bold">Dimension:</p>
            <p>{location.dimension}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const repository = new LocationRepositoryAPI();
  const usecase = new GetLocationById(repository);
  const location = await usecase.execute(Number(id));

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location: JSON.parse(JSON.stringify(location)),
    },
  };
};