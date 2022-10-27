// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchesList: [],
    latestTeamMatches: [],
    recentTeamMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamMatchesData = await response.json()
    console.log(teamMatchesData)
    const updatedTeamMatches = {
      latestMatchDetails: teamMatchesData.latest_match_details,
      recentMatches: teamMatchesData.recent_matches,
      teamBannerUrl: teamMatchesData.team_banner_url,
    }

    const latestTM = updatedTeamMatches.latestMatchDetails
    // console.log(latestTM)

    const updatedLatestTeamMatches = {
      id: latestTM,
      competingTeam: latestTM.competing_team,
      competingTeamLogo: latestTM.competing_team_logo,
      date: latestTM.date,
      firstInnings: latestTM.first_innings,
      manOfTheMatch: latestTM.man_of_the_match,
      matchStatus: latestTM.match_status,
      secondInnings: latestTM.second_innings,
      result: latestTM.result,
      umpires: latestTM.umpires,
      venue: latestTM.venue,
    }
    const uRM = updatedTeamMatches.recentMatches
    //  console.log(uRM)
    const updatedRecentTeamMatches = uRM.map(eachTeam => ({
      competingTeam: eachTeam.competing_team,
      competingTeamLogo: eachTeam.competing_team_logo,
      matchStatus: eachTeam.match_status,
      result: eachTeam.result,
      id: eachTeam.id,
    }))

    this.setState({
      teamMatchesList: updatedTeamMatches,
      latestTeamMatches: updatedLatestTeamMatches,
      recentTeamMatches: updatedRecentTeamMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      teamMatchesList,
      latestTeamMatches,
      recentTeamMatches,
      isLoading,
    } = this.state
    const {teamBannerUrl} = teamMatchesList
    console.log(recentTeamMatches)

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-container">
            <img
              alt="team banner"
              className="team-banner"
              src={teamBannerUrl}
            />
            <div className="latest-matches-container">
              <h1 className="latest-matches-heading">Latest Matches</h1>
              <LatestMatch latestTeamMatchesDetails={latestTeamMatches} />
            </div>
            <div className="match-card-container">
              {recentTeamMatches.map(eachMatch => (
                <MatchCard
                  recentTeamMatchesDetails={eachMatch}
                  key={eachMatch.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
