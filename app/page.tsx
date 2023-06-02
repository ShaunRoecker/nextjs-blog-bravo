
import Link from "next/link";



type Repository = {
  id: number;
  name: string;
  full_name: string;
}

type Time = {
  utc_datetime: string;
}


const getTime = async (): Promise<Time> => {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      next: {
        revalidate: 5,
      }
    }
  );
  return res.json();
}

const getRepo = async (): Promise<Repository> => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  return res.json();
}




const Home = async () => {
  const [data, time] = await Promise.all([getRepo(), getTime()]);
  return (
    <div>
      <h1>{data.id}</h1>  
      <h1>{data.name}</h1>  
      <h1>{data.full_name}</h1>  
      <h1>{time.utc_datetime}</h1>
      <Link href="/about">About</Link>
      <div>Home Page</div>
      

    </div>
  )
};

export default Home;
