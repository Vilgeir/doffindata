import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { StateContext } from '../../context/StateProvider'
import Checkboxes from './Checkboxes'

const Fylker = ({ setOpenCounty, openCounty, fylker, fylkerKommuner }) => {
  const { checkedFylker, kommuner, setKommuner } = useContext(StateContext)
  const handleClickFylker = (e) => {
    if (
      kommuner
        .flat()
        .map((kom) => kom.Fylke)
        .includes(e.target.value)
    ) {
      setKommuner((prev) => [
        ...prev.flat().filter((p) => p.Fylke !== e.target.value),
      ])
    } else {
      setKommuner((prev) => [
        ...prev,
        fylkerKommuner.filter((i) => i.Fylke === e.target.value),
      ])
    }
  }
  return (
    <>
      <div onClick={setOpenCounty.toggle} className='filter-header'>
        <h4>Fylker </h4>
        <FontAwesomeIcon icon={openCounty ? faChevronUp : faChevronDown} />
      </div>
      {openCounty &&
        fylker.map((item, i) => (
          <div className='checkboxes' key={i}>
            <Checkboxes
              onChange={handleClickFylker}
              checked={checkedFylker.includes(item.navn) ? true : false}
              data={item}
            />
          </div>
        ))}
    </>
  )
}

export default Fylker
