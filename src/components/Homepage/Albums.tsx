import React, { useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import Glider, { GliderMethods } from 'react-glider'
import fetchJsonp from 'fetch-jsonp'
import { Context } from '../../context/Context'
// import { randomAlbumTrack } from 'helperFunctions'
import 'glider-js/glider.min.css'

function Playlists() {
  const gliderRef = useRef<GliderMethods>(null)
  const { state, dispatch } = useContext(Context)
  const [indexPlaylists, setIndexPlaylists] = useState<number>(20)
  const [indexAlbums, setIndexAlbums] = useState<number>(20)

  // const loadMoreAlbums = () => {
  //   fetchJsonp(`https://api.deezer.com/chart?index=${this.state.indexAlbums}&limit=20&output=jsonp`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       const { top } = this.props
  //       store.dispatch(
  //         actions.fetchChartAction({
  //           ...top,
  //           albums: {
  //             data: [...top.albums.data, ...data.albums.data]
  //           }
  //         })
  //       )
  //       this.setState({
  //         indexAlbums: this.state.indexAlbums + 20
  //       })
  //     })
  // }

  const findAlbum = (id) => {
    fetchJsonp(`https://api.deezer.com/album/${id}?output=jsonp`)
      .then((resp) => resp.json())
      .then((album) => {
        dispatch({ type: 'FIND_ALBUM', payload: album })
        // randomAlbumTrack({ ...this.props, album })
      })
    dispatch({ type: 'CHANGE_PLAYLIST', payload: 0 })
    dispatch({ type: 'ARTIST_PLAYLIST', payload: [] })
  }

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 7,
  //   slidesToScroll: 7,
  //   adaptiveHeight: true,
  //   autoplay: true,
  //   focusOnSelect: false,
  //   autoplaySpeed: 5000,
  //   nextArrow: <NextArrow onClick={() => this.slickNext} />,
  //   prevArrow: <PrevArrow onClick={() => this.slickPrev} />
  // }

  return (
    <section className="Albums">
      <h3>Trending Albums</h3>
      {/* <Slider {...settings} {...{ beforeChange: this.loadMoreAlbums }}> */}
      {state.topChart && (
        <Glider
          draggable
          hasArrows
          hasDots
          slidesToScroll={7}
          slidesToShow={7}
          className="gradient-outline"
          ref={gliderRef}
        >
          {state.topChart.albums.data.map((album) => (
            <div key={album.id}>
              <Link to={`/album/${album.id}`} onClick={() => findAlbum(album.id)}>
                <figure>
                  <img
                    src={album.cover_medium && album.cover_medium.replace(/(250)x\1/, '200x200')}
                    alt={album.title}
                  />
                  <figcaption>
                    <p>{album.title}</p>
                    <div className="album-artist">
                      <p>{album.artist?.name}</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </Glider>
      )}
    </section>
  )
}

export default Playlists