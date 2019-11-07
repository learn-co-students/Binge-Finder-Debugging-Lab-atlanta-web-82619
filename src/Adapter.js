import React from 'react'

class Adapter extends React.Component {
  static getShows (){
    fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  static getShowEpisodes (showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
    .then(res => res.json())
  }
}

export default Adapter
