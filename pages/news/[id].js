import { useRouter } from 'next/router';

const SingleNews = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
};

export default SingleNews;