import React from 'react'
import '../../Global/Form/form.css'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown'

const UndergraduatesUniArea = (props) => {

    var title1 = 'Τμήμα';
    var title2 = 'Περιοχή';

    const universities = [
        {
            id: 1,
            title: 'Όλα τα τμήματα'
        },
        {
            id: 2,
            title: 'ΕΚΠΑ'
        },
        {
            id: 3,
            title: 'ΑΠΘ'
        }
    ];

    const areas = [
        {
            id: 1,
            title: 'Όλες οι περιοχές'
        },
        {
            id: 2,
            title: 'Αθήναααααααααααααααααααααααααααααααααααααα'
        },
        {
            id: 3,
            title: 'Θεσσαλονίκη'
        }
    ]

  return (
    <div className="undergrad-comp-half-container">
        <HalfDropdown
        title={title1}
        options={universities}
        selectedTitle={props.selectedUniversity}
        setSelectedTitle={props.setSelectedUniversity}
        />
        <HalfDropdown
        title={title2}
        options={areas}
        selectedTitle={props.selectedArea}
        setSelectedTitle={props.setSelectedArea}
        />
    </div>
  )
}

export default UndergraduatesUniArea