import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <div className="team-card">
        <img alt={name} className="team-image" src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
