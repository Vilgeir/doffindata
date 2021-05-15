import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { StateContext } from '../../context/StateProvider'
import structure from '../../data/withNorwegianNames'
import { capitalizeAndReplace } from '../../helpers/functions'
import Checkboxes from './Checkboxes'

const Kategorier = ({
  setOpenCategory,
  openCategory,
  category,
  details,
  checked,
  setChecked,
}) => {
  const { setcheckedCategories, checkedCategories } = useContext(StateContext)

  const handleCheck = (e) => {
    setChecked((prevState) =>
      prevState.includes(e.target.value)
        ? [...prevState.filter((i) => i !== e.target.value)]
        : [...prevState, e.target.value]
    )
  }
  const handleChange = (e) => {
    setcheckedCategories((prevState) =>
      prevState.map((i) =>
        Object.keys(i).join().substring(0, 3) === e.target.value.substring(0, 3)
          ? e.target.checked === false
            ? {
                [Object.keys(i).join()]: [
                  ...Object.values(i)[0].filter(
                    (item) => item !== e.target.value
                  ),
                ],
              }
            : {
                [Object.keys(i).join()]: [
                  ...Object.values(i)[0],
                  e.target.value,
                ],
              }
          : i
      )
    )

    handleCheck(e)
  }

  const handleClick = (e) => {
    checkedCategories.map(
      (i) =>
        Object.keys(i).join() === e.target.value &&
        setcheckedCategories((prevstate) => [
          ...prevstate.filter(
            (item) => Object.keys(item).join() != [e.target.value]
          ),
        ])
    )
    e.target.checked === true &&
      setcheckedCategories((prevState) => [
        ...prevState,
        { [e.target.value]: [] },
      ])
    handleCheck(e)
  }

  return (
    <>
      <div onClick={setOpenCategory.toggle} className='filter-header'>
        <h4>Kategorier </h4>
        <FontAwesomeIcon icon={openCategory ? faChevronUp : faChevronDown} />
      </div>
      {openCategory && (
        <div className='check-container'>
          {structure.map(
            (it) =>
              it.main === capitalizeAndReplace(category) &&
              it.children.map(
                (i) =>
                  i.code === details &&
                  i.children.map((item, i) => (
                    <div className='checkboxes' key={i}>
                      <Checkboxes
                        onChange={handleClick}
                        checked={checked.includes(item.code) ? true : false}
                        data={item}
                      />

                      {checkedCategories.map(
                        (check) =>
                          Object.keys(check).includes(item.code) &&
                          item.children.map((it, index) => (
                            <div className='subcheckboxes' key={index}>
                              <Checkboxes
                                onChange={handleChange}
                                data={it}
                                checked={
                                  checked.includes(it.code) ? true : false
                                }
                              />
                            </div>
                          ))
                      )}
                    </div>
                  ))
              )
          )}
        </div>
      )}
    </>
  )
}

export default Kategorier
