import './index.css'

const LatestMatch = props => {
  const {latestTeamMatchesDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    result,
    umpires,
    venue,
  } = latestTeamMatchesDetails

  return (
    <ul className="latest-match-card">
      <li>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </li>
      <li>
        <img
          alt={`latest match ${competingTeam}`}
          className="competiting-team-logo"
          src={competingTeamLogo}
        />
      </li>
      <li>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </li>
    </ul>
  )
}

export default LatestMatch
