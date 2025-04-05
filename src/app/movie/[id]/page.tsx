
// 1. promise.all을 사용하여 동시에 데이터를 가져옴
// async function getMovies(id:string){
//   const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies/'+id);
//   return response.json();
// }
//
// async function getVideo(id:string){
//   const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies/'+id+'/videos');
//   return response.json();
// }
//
// export default async function MovieDetail({ params }: { params: Promise<{id: string}> }) {
//   const { id } = await params;
//   // const movie = await getMovies(id);
//   // const video = await getVideo(id);
//   //promise.all을 사용하여 동시에 데이터를 가져옴
//   const [movie, video] = await Promise.all([getMovies(id), getVideo(id)]);
//   return (
//       <div>{JSON.stringify(movie)}{JSON.stringify(video)}</div>
//   );
// }


// 2. component에서 각자 데이터를 가져옴
// suspense 를 사용, 비동기 데이터 페칭을 처리할때 로드도는동안 ui를 지정해줄수있음
import MovieInfo from "@/component/movie-info";
import MovieVideo from "@/component/movie-video";
import {Suspense} from "react";

export default function movieDetail({ params }: { params: {id: string}}) {
  const { id } = params;
  return (
      <div>
          <Suspense fallback={<h1>Loading movie_info...</h1>}>
            <MovieInfo id={id}/>
          </Suspense>
          <Suspense fallback={<h1>Loading movie_video...</h1>}>
              <MovieVideo id={id}/>
          </Suspense>
      </div>
  );
}