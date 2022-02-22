import axios from "axios"
import { useEffect, useState } from "react"

export const SearchingForm = () => {

    const [pokemonsData, setPokemonsData] = useState<any[]>([])
    const [search, setSearch] = useState('')
    const spriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    const url = 'https://pokeapi.co/api/v2/pokemon' + '/?limit=1126&offset=0'


    useEffect(() => {
        axios.get(url)
            .then((res) => setPokemonsData(res.data.results)
            )
    }, [setPokemonsData])


    return (
        <div className="searching-form">
            <form>
                <input type="text" placeholder='search a pokemon' id="search-input" onChange={e => setSearch(e.target.value)} />
            </form>
            <div className="result">
                {pokemonsData.map((el, index) => (
                    <div className="card"
                        key={index + el.name}
                        style={el.name.includes(search) ? { display: 'block' } : { display: 'none' }}
                    >
                        <span>{'#' + index}</span>
                        <img src={spriteUrl + el.url.substring(34).replace('/', '') + '.png'} onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = '../assets/images/sprite-not-found.png';
                        }} alt={el.name} />
                        <h3 key={el.name} >{el.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
