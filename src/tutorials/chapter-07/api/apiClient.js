//import { genre } from './../data/Genre';
import _ from 'lodash';

function getGenreDesc(dataGenre,genreIds) {
    let genreDesc = [];
    for (let genreId of genreIds) {
        genreDesc=[...genreDesc,dataGenre.filter(x=> x.id === genreId).map(v=> v.name)]
    }

    return genreDesc;
}

export { getGenreDesc }