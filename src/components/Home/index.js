import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamData = await response.json()
    console.log(teamData.teams)

    const updatedTeamData = teamData.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamList: updatedTeamData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div className="home-container">
        <ul className="responsive-card">
          <li className="home-card">
            <img
              alt="ipl logo"
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            />
            <h1 className="home-heading">IPL Dashboard</h1>
          </li>

          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <li className="team-card-container">
              {teamList.map(eachTeamData => (
                <TeamCard
                  teamCardDetails={eachTeamData}
                  key={eachTeamData.id}
                />
              ))}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Home
