import './index.css'

const MatchCard = props => {
  const {recentTeamMatchesDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = recentTeamMatchesDetails
  const status =
    matchStatus === 'Won' ? (
      <p className="won">{matchStatus}n</p>
    ) : (
      <p className="lost">{matchStatus}</p>
    )
  return (
    <div className="match-card">
      <img
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
        src={competingTeamLogo}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      {status}
    </div>
  )
}
export default MatchCard
