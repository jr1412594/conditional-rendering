import TvShowCard from './TvShowCard'
export default function TvShowsSection(props) {

    const displayTvShows = () => {
        return props.tvShows.map(tvShow => {
            return <TvShowCard tvShow={tvShow}/>

        })
    }

    return (
        <section>
            { displayTvShows() }
        </section>
    )
}
