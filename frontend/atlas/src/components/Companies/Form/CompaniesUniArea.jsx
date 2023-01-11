import React from 'react'
import '../../Global/Form/form.css'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown';

const CompaniesUniArea = (props) => {

    const {
            selectedUniversity,
            setSelectedUniversity,
            selectedArea,
            setSelectedArea
        } = props;

    var title1 = 'Πανεπιστήμιο *';
    var title2 = 'Περιοχή *';

    const universities = [
        {
            id: 1,
            title: 'Όλα τα πανεπιστήμια'
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
            title: 'Αθήνα'
        },
        {
            id: 2,
            title: 'Θεσσαλονίκη'
        }
    ];

  return (
    <div className="undergrad-comp-half-container">
        <HalfDropdown
        title={title1}
        options={universities}
        selectedTitle={selectedUniversity}
        setSelectedTitle={setSelectedUniversity}
        />
        <HalfDropdown
        title={title2}
        options={areas}
        selectedTitle={selectedArea}
        setSelectedTitle={setSelectedArea}
        />
    </div>
  )
}

export default CompaniesUniArea