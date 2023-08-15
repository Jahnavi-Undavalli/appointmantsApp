import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavorite} = props
  const {id, title, date, isFavorite, date1} = appointmentDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const postedTime = format(date1, 'dd MMMM yyyy, EEEE')

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{title}</p>
        <img src={starImgUrl} className="favorite-icon" />
        <p className="time">Date : {postedTime}</p>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default AppointmentItem
