import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="time-logo-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title} </p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        onClick={onClickDelete}
        type="button"
        className="del-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
