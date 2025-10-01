import { Typography } from "@/components";
import type {Film, FilmCategory} from "@/types";

export const filmComponentMapper = (film: Film, category) => {
    console.log("🚀 ~ filmComponentMapper ~ category:", category);
    const { adult, 
        backdrop_path, 
        genre_ids, 
        id, 
        original_language,
         original_title, 
         overview,
          popularity,
           poster_path, 
           release_date, 
           title, video,
            vote_average, 
            vote_count} = film;
    

    // if(adult) {
    //     return <Typography  
    // }


}
